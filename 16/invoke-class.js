function hello() {
  console.log('hello my friend');
}


// Invoke a function/class
function makeHello( functionName ) {
  functionName();
}


// NodeJS Course example
makeHello(hello);

/**
 * My test to understand how to invoke/call an object function inside another function

 Thats not work cause when i pass hello() with parentesis , this try to execute the function
 He just ignore the init of initial expression function who calls him and try to execute him self

 But ... how i can execute a function inside a expression function with params ????
 */
// makeHello(hello());


var a = 1;
var b = '4';
var c = a + b;
var d = a + 'b';
var e = a + 1 ;

console.log('C : ' + c );
console.log('D : ' + d );
console.log('E : ' + e );
