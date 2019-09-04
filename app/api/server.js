
var port = 3000;

function start() {
    var express = require('express'),
        app = express(),
        bodyParser = require('body-parser');

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    var routes = require('./routes.js');
    routes(app);

    app.listen(port);
    console.log('RESTful API server ejecutandose en el puerto ' + port);
}

function stop(){
    const httpClient = require('request-promise');
    let httpOptions = {
        method: 'GET',
        uri: 'http://localhost:'+port+'/api/exit/',
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