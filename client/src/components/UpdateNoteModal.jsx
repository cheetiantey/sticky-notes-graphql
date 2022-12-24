import { useState } from "react"
import { useMutation } from "@apollo/client"
import { UPDATE_NOTE } from "../mutation/noteMutations";
import { GET_NOTES } from "../queries/noteQueries";

export default function UpdateNoteModal({ noteId }) {
    // Setting the initial states to "undefined" as sending "undefined" to GraphQL would not 
    // change its value (in other words, the value that it currently has is preserved)
    // whereas sending an empty string to GraphQL would replace the value (with an empty string)
    const [name, setName] = useState(undefined);
    const [description, setDescription] = useState(undefined);

    const [updateNote] = useMutation(UPDATE_NOTE, {
        variables: {id: noteId, name, description},
        refetchQueries: [{ query: GET_NOTES }],
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (name === '' && description === '')
        {
            return alert("Please fill up at least one field");
        }

        updateNote(name, description);

        // Clear the states of the modal after adding the note
        setName(undefined);
        setDescription(undefined);
    };

    const modalId = "updateNoteModal" + noteId;
    return (
        <>
            <div className="modal fade" id={modalId} aria-labelledby="updateNoteModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="updateNoteModalLabel">Edit Sticky Note</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name || ""} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" id="name" value={description || ""} onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Submit</button>
                    </form>
                </div>
                </div>
            </div>
            </div>            
        </>
    )
}
