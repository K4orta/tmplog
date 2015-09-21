var fs = require('fs');
var path = require('path');

var basePath = '/sys/bus/w1/devices';
var devices = fs.readdirSync(basePath);
var device = devices[0];

fs.readFile(path.join(basePath, device, 'w1_slave'), function(err, readOut) {
  var temp = cToF(readOut.match(/t=\d*/)[0].replace('t=', ''));
  console.log(temp);
});

var cToF = function(temp) {
  return parseFloat(temp) * 9.0 / 5.0 + 32.0;
}
