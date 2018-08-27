console.log('Starting notes.js');
//console.log(module);

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicatedNotes = notes.filter((note) => note.title === title);
    if (duplicatedNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    return fetchNotes();
   // console.log('Getting all notes');
}
let getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title === title
    });
    return filteredNotes[0];
}
let removeNote = (title) => {
  //fetch notes
    //filter notes, removeing the one
    //save new notes array
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;

}

var logNote = (note) => {
    //break on this lin ad use repl to outpt note
    //Use read command with title
    debugger;
    console.log("--");
    console.log(`Title:${note.title}`);
    console.log(`Title:${note.body}`);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};