console.log('starting app.js');
const fs = require('fs');
const os = require('os');
var user = os.userInfo();
console.log(user)


fs.appendFile('freetings.txt', `Hello ${user.username}!`, (err) => {
    if (err) {
        console.log('Unable to write to file');
    }
});



//console.log('Hello world');
