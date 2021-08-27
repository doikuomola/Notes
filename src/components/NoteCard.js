import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Typography from '@material-ui/core/Typography';

export default function NoteCard({note, handleDelete}){

    return(
        <Card key={note.id}>
            <CardHeader
             
              action={
                <IconButton aria-label="delete" onClick={() => handleDelete(note.id)}>
                  <DeleteRoundedIcon color="secondary" fontSize="small" />
                </IconButton>
              }
              title={note.title}
              subheader={note.category}
              
            />
            <CardContent>
                <Typography>
                {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}