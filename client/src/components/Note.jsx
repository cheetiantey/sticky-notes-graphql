import { FaTrash } from "react-icons/fa";
import { TiSpanner } from "react-icons/ti";
import { useMutation } from "@apollo/client";
import { DELETE_NOTE } from "../mutation/noteMutations";
import { GET_NOTES } from "../queries/noteQueries";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Note({ note }) {
    const [deleteNote] = useMutation(DELETE_NOTE, {
        variables: { id: note.id },
        update(cache, {data: {deleteNote}}) {
          const { notes } = cache.readQuery({ query: GET_NOTES});
          cache.writeQuery({
            query: GET_NOTES,
            data: { notes: notes.filter(note => note.id !== deleteNote.id)}
          })
        }
      });

  return (
    <>
        <Card style={{ width: '18rem'}}>
        <Card.Body>
            <Card.Title>{note.name}</Card.Title>
            <Card.Text>
                {note.description}
            </Card.Text>
            <Button variant="info">
                <TiSpanner />
                Edit
            </Button>
            <Button variant="danger" onClick={deleteNote}>
                <FaTrash />
                Delete
            </Button>
        </Card.Body>
        </Card>
    </>
  )
}
