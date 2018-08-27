console.log('starting app.js');
const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
var command = process.argv[2];
console.log('comm: ', command);
if (command==='add') {
    console.log('Adding new note');
}
else if (command==='list') {
    console.log('list new note');
}
else {
    console.log('Command not recorgized');
}