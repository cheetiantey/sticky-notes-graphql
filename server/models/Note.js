const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

// Mongoose will turn "Note" into "notes" and try to find it in MDB
module.exports = mongoose.model("Note", NoteSchema); 