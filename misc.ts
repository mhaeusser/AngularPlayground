
function log(message) {
    console.log(message);
}

var message = 'Hello World';
log(message);


function doSomething() {
	for (var i=0; i < 5; i++) {
		console.log(i);
	}
	
	console.log('Finally: ' + i); // scope is "to the nearest function", different to "let"
}

doSomething();


let log = function(message) {
	console.log(message);
}

let doLog = (message) =>  console.log(message);

let drawPoint = (x, y) => {
	
}

let drawPoint = (point) => {
	
}

drawPoint({
	x: 1,
	y: 2
})
