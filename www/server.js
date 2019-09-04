var express = require('express');
var app = express();
var port = 8080;
var wwwRoot = __dirname + '/public';
app.use('/', express.static(wwwRoot)); // ← adjust
app.listen(port, function() { console.log('listening on port: ' + port + ', with ROOT: ' + wwwRoot); });