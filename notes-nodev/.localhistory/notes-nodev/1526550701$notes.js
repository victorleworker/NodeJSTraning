console.log('Starting notes.js');
//console.log(module);

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};
let getAll = () => {
    console.log('Getting all notes');
}
let getNote = (title) => {
    console.log('getting note', title);
}
let removeNote = (title) => {
    console.log('removing note', title)
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNotes
};