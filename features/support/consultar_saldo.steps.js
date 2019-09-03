const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const httpClient = require('request-promise')

let httpOptions = {};
let wsResponse = undefined;

Given('Quiero saber el saldo de la billetera', function () {
    httpOptions = {
        method: 'GET',
        uri: 'http://localhost:3000/api/saldo',
        resolveWithFullResponse: true
    };
});

When('Hago un request GET hacia el url saldo', async function () {
     await httpClient(httpOptions)
        .then(function(response) {
            wsResponse = response.body;
        })
        .catch(function(error) {
            wsResponse = error;
        });
     console.log(wsResponse);
     this.loadFromResponse(wsResponse);
});

Then('Recibo una respuesta con estado {string} y con el saldo correspondiente de la billetera', function (estado) {
    expect(this.estado).to.eql(estado);
});