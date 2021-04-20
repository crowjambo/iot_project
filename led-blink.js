var rpio = require('rpio');

rpio.open(11, rpio.OUTPUT);

setInterval(function blink() {
	rpio.write(11, rpio.HIGH);
	setTimeout(function ledoff() {
		rpio.write(11, rpio.LOW);
	}, 50);
}, 100);
