// var greetings = require('./hello'); // Man, its not work, cause you calling an javascript file ... they must be require an json file
var greetings = require('./hello.json');

// var greet = function() {
// 	console.log('Hola :D');
// }

var greet = function() {
	console.log(greetings.es);
}

module.exports = greet;