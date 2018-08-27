console.log('starting app.js');
const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
var command = process.argv[2];
console.log('comm: ',command);