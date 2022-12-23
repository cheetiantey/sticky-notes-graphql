import { FaTrash } from "react-icons/fa";
import { TiSpanner } from "react-icons/ti";
import { useMutation } from "@apollo/client";
// import { DELETE_NOTE } from "../mutation/noteMutations";
import { GET_NOTES } from "../queries/noteQueries";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Note({ note }) {
    // const [deleteClient] = useMutation(DELETE_CLIENT, {
    //     variables: { id: client.id },
    //     update(cache, {data: {deleteClient}}) {
    //       const { clients } = cache.readQuery({ query: GET_CLIENTS});
    //       cache.writeQuery({
    //         query: GET_CLIENTS,
    //         data: { clients: clients.filter(client => client.id !== deleteClient.id)}
    //       })
    //     }
    //   });

    const deleteNote = () => {
        // TODO: Implement the actual deletion function
        console.log("Deleting a note");
    }

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
