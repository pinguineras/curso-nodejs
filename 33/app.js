var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
	console.log('Somewhere, someone said hello :>D');
});

emtr.on('dingDong', function(){
	console.log('HUEEEE');
});



console.log('Hola :D');

emtr.on('greet', function(){
	console.log('SOps!');
});

emtr.emit('greet');


emtr.emit('dingDong');