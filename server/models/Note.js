const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model("Note", NoteSchema);