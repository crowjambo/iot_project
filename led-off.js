var rpio = require('rpio');

rpio.open(11, rpio.OUTPUT);
rpio.write(11, rpio.LOW);
