// Construction functions
function Person(firstname , lastname) {
    // console.log(firstname);
    // console.log(lastname);
    this.firstname = firstname; // Set the value of the object
    this.lastname = lastname;
}



Person.prototype.greet = function(){
    console.log('Hello : ' + this.firstname + ' ' + this.lastname);
};

var Lorenzo = new Person('Lorenzo', 'Dalézio');
var Leticia = new Person('Leticia', 'Cristina');

console.log(Lorenzo.firstname);
console.log(Lorenzo.lastname);
// Person.greet(); // will not work, cause its not have the params
Lorenzo.greet(); /// will work :D


console.log(Lorenzo.__proto__);
console.log(Leticia.__proto__);
console.log(Leticia.__proto__ === Lorenzo.__proto__);
