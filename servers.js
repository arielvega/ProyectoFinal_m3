const { spawn } = require('child_process')
var childWS = spawn('npm', ['run-script','server:ws']);
var childWWW = spawn('npm', ['run','server:www']);
console.log("Servidores ejecutados con exito");