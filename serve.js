var server = require('server');
var { get } = server.router;


// Setup the Raspberry pi
var rpio = require('rpio');

rpio.open(11, rpio.OUTPUT);

function ledOn() {
  rpio.open(11, rpio.OUTPUT);
  rpio.write(11, rpio.HIGH);
}

function ledOff() {
  rpio.open(11, rpio.OUTPUT);
  rpio.write(11, rpio.LOW);
}

function blink() {
  rpio.write(11, rpio.HIGH);
  setTimeout(function ledoff() {
    rpio.write(11, rpio.LOW);
  }, 50);
}

server({ port: 3000 }, [
  get('/', ctx => {
    console.log('a request is coming...');
    return "default page"
    //blink();
  }),
  get('/off', ctx => {
    return "LED off"
    // ledOff()
  }),
  get('/on', ctx => {
    return "Led on"
    // ledOn()
  }),
]);

console.log('server starts on 3000 port');
