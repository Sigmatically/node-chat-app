// Jan 1st 1970 00:00:00  <- what a time stamp usually looks like
// new Date().getTime() ^

const moment = require('moment');

var createdAt = 1234;
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment();
console.log(date.format('h:mm A'));
