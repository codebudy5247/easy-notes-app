const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});
/*Mongoose uses this option to automatically add two new fields - 
createdAt and updatedAt to the schema.*/

module.exports = mongoose.model('Note', NoteSchema);