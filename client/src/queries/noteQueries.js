import { gql } from "@apollo/client";

const GET_NOTES = gql`
    query getNotes {
        notes {
            id
            name
            description
        }
    }
`;

export { GET_NOTES };