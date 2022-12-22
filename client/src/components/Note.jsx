import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
// import { DELETE_NOTE } from "../mutation/noteMutations";
import { GET_NOTES } from "../queries/noteQueries";

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

  return (
    <>
        <tr>
            <td>{note.name}</td>
            <td>{note.description}</td>
            {/* <td>
                <button className="btn btn-danger btn-sm" onClick={deleteNote}>
                    <FaTrash />
                </button>
            </td> */}
        </tr>
    </>
  )
}
