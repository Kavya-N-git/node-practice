// asssume this file contains login modules which can be used outside this module by exporting to main module that app.js
var url="http://www.google.com"; // url -> private member of module 

function log(message){
    console.log(message);
}

module.exports.log=log;
//L>H.S log -> exports object (setting it to log() defined) 
//R.H.S lof -> function name 