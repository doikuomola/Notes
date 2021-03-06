import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import NoteCard from '../components/NoteCard'

export default function Notes() {
  const [notes, setNotes] = useState([])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))

  }, [])



  return (
    <Container>
      <Grid container spacing={2}>
        {notes.map(note => (
        <Grid item xs={12} sm={6} md={3}>
          <NoteCard note={note} handleDelete={handleDelete} />
        </Grid>

      ))}
      </Grid>

    </Container>
  )
}
