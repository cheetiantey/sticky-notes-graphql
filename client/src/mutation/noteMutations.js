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

const UPDATE_NOTE = gql`
    mutation updateNote($id: ID!, $name: String, $description: String) {
        updateNote(id: $id, name: $name, description: $description) {
            id
            name
            description
        }
    }
`;

export { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE };