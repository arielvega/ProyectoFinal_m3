const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const httpClient = require('request-promise')

let ingreso = undefined;
let httpOptions = {};
let wsResponse = undefined;

Given('El monto {int} Bs como monto de ingreso a la billetera', function (monto) {
    ingreso = {
        monto: monto
    };
});

When('Preparo el JSON de los datos', function () {
    httpOptions = {
        method: 'POST',
        uri: 'http://localhost:3000/api/ingreso',
        json: true,
        body: ingreso,
        resolveWithFullResponse: true
    };
});

Then('Hago un request POST hacia el url ingreso con los datos', async function () {
     await httpClient(httpOptions)
        .then(function(response) {
            wsResponse = response.body;
        })
        .catch(function(error) {
            wsResponse = error;
        });
     this.loadFromResponse(wsResponse);
});

Then('Recibo una respuesta con estado {string} y mensaje que indica "Se ha ingresado {int} Bs. a la billetera, el nuevo saldo es: XXX Bs."', function (estado, monto) {
    expect(this.estado).to.eql(estado);
    expect(ingreso.monto).to.eql(monto);
});