

var port = 8080;

function start() {
    var express = require('express');
    var app = express();
    var wwwRoot = __dirname + '/public';

    app.route('/exit/')
        .get(function (req, res) {
            resultado = {mensaje: "Servidor dado de baja correctamente"};
            res.json(resultado);
            console.log('Servidor dado de baja correctamente a peticion del usuario');
            process.exit();
        });

    app.use('/', express.static(wwwRoot));

    app.listen(port, function () {
        console.log('listening on port: ' + port + ', with ROOT: ' + wwwRoot);
    });
}

function stop(){
    const httpClient = require('request-promise');
    let httpOptions = {
            method: 'GET',
            uri: 'http://localhost:'+port+'/exit/',
            json: true,
            resolveWithFullResponse: true
        };
    httpClient(httpOptions).then(function(response) {console.log(response.body.mensaje)}).catch(function(error) {});
}

var argv = require('minimist')(process.argv.slice(2), {
    alias: {
        s: 'stop',
    }
});

if (argv.stop){
    stop();
} else {
    start();
}