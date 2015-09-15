var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
  io: new raspi()
});

board.on('ready', function() {
  var temperature = new five.Temperature({
    contoller: 'TMP36',
    pin: 'GPIO22'
  });

  var sensor = new five.Sensor('GPIO22');
  temperature.on('data', function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });
});
