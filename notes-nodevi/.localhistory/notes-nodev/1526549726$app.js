console.log('starting app.js');
const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');


const argv = yargs.argv;
var command = process.argv[2];
console.log('command: ', command);
console.log('process', process.argv);
console.log('Yargs', yargs);




if (command === 'add') {
    console.log('Adding new note');
}
else if (command === 'list') {
    console.log('list new note');
} else if (command === 'remove') {
    console.log('remove new node');
} else if (command === 'read') {
    console.log('read node');
}
else {
    console.log('Command not recorgized');
}