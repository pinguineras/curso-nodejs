// Object Literals
var person = {
    firstname : 'Júlio',
    lastname  : 'César',
    greet : function() {
        console.log('Olha o greet aqui : ' + this.firstname + ' ' + this.lastname);
    }
}


console.log(person);
console.log(person.firstname);
console.log(person.lastname);


console.log('Fistname: ' + person['firstname']);
console.log('Lastname: ' + person['lastname']);


person.greet();
