var fs = require('fs');
var path = require('path');

var basePath = '/sys/bus/w1/devices';
var devices = fs.readDirSync(basePath);
var device = devices[0];

fs.readFile(path.join(basePath, device), function(err, tmp) {
  console.log(temp);
});
