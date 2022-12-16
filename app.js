//console.log(module);


//loadin module - require() used 
// ./ -> bcoz in same folder
// ../ -> from parent folder

var logger = require('./logger');

console.log(logger); // returns object
//output  : { log: [Function: log] } || this log function can be called used logger

logger.log("Hello im called via app.js");
//output : Hello im called via app.js