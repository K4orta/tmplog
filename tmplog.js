var five = require('johnny-five');

five.Board.on('ready', function() {
  var temperature = new five.Temperature({
    contoller: 'TMP36',
    pin: '17'
  });

  var sensor = new five.Sensor('A5');
});
