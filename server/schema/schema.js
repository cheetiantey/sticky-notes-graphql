const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType } = require('graphql');

const Note = require('../models/Note');

// Note Type
const NoteType = new GraphQLObjectType({
    name: 'Note',
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString },
        description: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        notes: {
          type: new GraphQLList(NoteType),
          resolve(parent, args) {
            return Note.find();
          }
        },
        note: {
            type: NoteType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // To be replaced with mongoose's function to retrieve the values from MDB
                return Note.findById(args.id)
            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Add a note
        addNote: {
            type: NoteType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const note = new Note({
                    name: args.name,
                    description: args.description,
                });

                return note.save()
            }
        },
        // Delete a note
        deleteNote: {
            type: NoteType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID)},
            },
            resolve(parent, args) {
                return Note.findByIdAndRemove(args.id);
            }
        }
        // TODO: Write an "Update note" function
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation // We can just do "mutation" instead of "mutation: mutation" since they both have the same name
});