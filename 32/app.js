// object properties and objects
var obj = {
	greet : 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);


var prop = 'greet';
console.log(obj[prop]);

var array = [];
// array.push('Hello ar');

array.push(function() {
	console.log('Hello 1');
});
array.push(function() {
	console.log('Hello 2');
});
array.push(function() {
	console.log('Hello 3');
});
array.push(function() {
	console.log('Hello 4');
});

console.log(array);
console.log(array[1]);

array.forEach(function(item) {
	console.log(item);
	item();
});