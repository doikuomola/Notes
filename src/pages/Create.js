import { Container, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [category, setCategory] = useState('money')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false)
    setDetailsError(false)

    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }

    if (title && details) {
      console.log(title, details, category);

      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))

    }
  }
  return (
    <Container>
      <Typography variant="h2" color="textSecondary" gutterBottom >
        Create Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Note title" variant="outlined" fullWidth required className={classes.field} onChange={(e) => setTitle(e.target.value)} error={titleError} />
        <TextField id="outlined-basic" label="Note details" variant="outlined" fullWidth required className={classes.field} onChange={(e) => setDetails(e.target.value)} multiline
          rows={10} error={detailsError} />

        <FormControl component="fieldset" className={classes.field}>
          <FormLabel component="legend">Select Note Category</FormLabel>
          <RadioGroup value={category} name="category" onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="ToDos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" endIcon={<SendOutlinedIcon />}>
          SUBMIT
        </Button>
      </form>
    </Container>
  )
}
