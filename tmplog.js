var fs = require('fs');
var path = require('path');

var basePath = '/sys/bus/w1/devices';
var devices = fs.readdirSync(basePath);
var device = devices[0];

fs.readFile(path.join(basePath, device, 'w1_slave'), function(err, temp) {
  console.log(temp);
});
