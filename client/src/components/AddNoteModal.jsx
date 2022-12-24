import { useState } from "react"
import { AiFillFileAdd } from "react-icons/ai";
import { useMutation } from "@apollo/client"
import { ADD_NOTE } from "../mutation/noteMutations";
import { GET_NOTES } from "../queries/noteQueries";

export default function AddNoteModal() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [addNote] = useMutation(ADD_NOTE, {
        variables: {name, description},
        update(cache, {data: {addNote}}) {
            const {notes} = cache.readQuery({query: GET_NOTES});

            cache.writeQuery({
                query: GET_NOTES,
                data: {notes: notes.concat([addNote])}, // Or we can use the spread operator i.e., [...notes, addNote]
            });
        }
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (name === '' || description === '')
        {
            return alert("Please fill up all the fields");
        }

        addNote(name, description);

        // Clear the states of the modal after adding the note
        setName("");
        setDescription("");
    };

    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addNoteModal">
                <div className="d-flex align-items-center">
                    <AiFillFileAdd />
                    <div>Add a new sticky note</div>
                </div>
            </button>

            <div className="modal fade" id="addNoteModal" aria-labelledby="addNoteModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                  <div className="modal-header">
                      <h1 className="modal-title fs-5" id="addNoteModalLabel">Add Sticky Note</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <form onSubmit={onSubmit}>
                          <div className="mb-3">
                              <label className="form-label">Name</label>
                              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                          </div>
                          <div className="mb-3">
                              <label className="form-label">Description</label>
                              <input type="text" className="form-control" id="name" value={description} onChange={(e) => setDescription(e.target.value)} />
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
