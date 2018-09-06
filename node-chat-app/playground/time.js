var moment = require('moment');
var someTimestamp = moment().valueOf();
var createdAt = 1234;
var date = moment(1234);
console.log(someTimestamp);
console.log(date.format('h:mm a'));