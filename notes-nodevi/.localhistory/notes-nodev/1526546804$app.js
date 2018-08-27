console.log('starting app.js');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

var fillteredArray = _.uniq(['andrew', 1, 'andrew', 1, 2, 3, 4]);
console.log(fillteredArray)
//console.log(_.isString(true));
//console.log(_.isString('android'));
//console.log('result:',notes.add(9, -2));

//var user = os.userInfo();
//console.log(user)


//fs.appendFile('freetings.txt', `Hello ${user.username}! you are ${notes.age}.`, (err) => {
//    if (err) {
//        console.log('Unable to write to file');
//    }
//});



//console.log('Hello world');
