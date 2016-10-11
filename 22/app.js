// Example of and immediatly invoked function expression
(function(){
    var firstname = 'Teste 1';
    console.log(firstname);
})(); // When i put the initial parentesis and the final after construct the funciton, this means i set i need invoke this immediatly


var firstname = 'Marmota 2';
console.log(firstname);

// Now im trying to put the expression with a var firstname after the primitive value
(function(){
    var firstname = 'Teste 1 denovo';
    console.log(firstname);
}());

console.log(firstname);

// when i log finnaly the both firstname, the expression doesnt impact the variable firstname
// This occours cause they have a differente SCOPE


// I can usually use an expression like a function, but remember he ill be invoked immediatly
(function(param){
    var firstname = 'Teste 1 denovo, denovo';
    console.log(firstname);
    console.log(param); 
}('String de teste para representar o parametros'))
