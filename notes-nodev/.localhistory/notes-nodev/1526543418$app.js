'use strict';
const fs = require('fs');
fs.appendFile('freetings.txt', 'Hello world!', (err) => {
    if (err) {
        console.log('Unable to write to file');
    }
});

console.log('Hello world');