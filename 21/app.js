//  Passing by Value
function change(b) {
    b = 2;
}

var a = 1; // Valor primitivo

change(a); // Isso não irá impactar a variável a por a mesma ser primitiva, e alocar blocos diferentes na memória
console.log(a);


//  Passing by Reference

var c = {}; // Object

function changeObject( d ) {
    d.prop1 = function() {};
    d.prop2 = {
        'teste' : 'teste 2'
    }
}

console.log(c);

c.prop1 = 'Testando primeira função antes de passar valores por referencia';

console.log(c);

changeObject(c); // Isso irá trocar o valor, pois o object aloca o mesmo bloco na memória. Fazendo com que d acesse C e troque os valoes de C
console.log('Testando após trocar o valor por referencia');
console.log(c);
