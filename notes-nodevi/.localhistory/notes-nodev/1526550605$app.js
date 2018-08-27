console.log('starting app.js');
const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');


const argv = yargs.argv;
var command = process.argv[2];
console.log('command: ', command);
console.log('process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {    
    notes.addNote(argv.title, argv.body);
}
else if (command === 'list') {
    notes.getAll();
} else if (command === 'remove') {
    notes.Remove();
} else if (command === 'read') {
    notes.getNote(argv.title);
}
else {
    console.log('Command not recorgized');
}