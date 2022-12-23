import { useQuery } from "@apollo/client";
import Spinner from "./Spinner";
import Note from "./Note"
import { GET_NOTES } from "../queries/noteQueries";

export default function Notes() {
    const { loading, error, data } = useQuery(GET_NOTES);

    if (loading) return <Spinner />;
    if (error) return <p>An error occurred while fetching notes from MongoDB</p>;
      
    return (
        <>
            {!loading && !error && 
                data.notes.map(note => (
                    <Note key={note.id} note={note} />
                ))
            }
        </>
    )
}
