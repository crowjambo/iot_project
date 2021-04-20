// var server = require('server');
// var { get } = server.router;

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

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/on', function (req, res) {
  res.send('Led On');
  ledOn()
});

app.get('/off', function (req, res) {
  res.send('Led Off');
  ledOff()
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
