import { gql } from "@apollo/client";

const ADD_NOTE = gql`
    mutation addNote($name: String!, $description: String!) {
        addNote(name: $name, description: $description) {
            id
            name
            description
        }
    }
`;

const DELETE_NOTE = gql`
    mutation deleteNote($id: ID!) {
        deleteNote(id: $id) {
            id
            name
            description
        }
    }
`;

// TODO: Implement UPDATE_NOTE function

export { ADD_NOTE, DELETE_NOTE };