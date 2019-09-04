const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const { Builder, By, Key, until } = require('selenium-webdriver');

let monto = 0;
let index_page = 'http://localhost:8080/billetera/ingreso.html';
let chromeDriver = undefined;

Given('Dados datos monto a ingresar: {float}', function (float) {
    monto = float;
});

When('Navego a la pagina principal', async function () {
    chromeDriver = await new Builder().forBrowser('chrome').build();
    await chromeDriver.get(index_page);
});

When('Llenar el campo de monto', async function () {
    await chromeDriver.findElement(By.name('monto')).sendKeys(monto);
});

When('Hacer click en el boton Registrar', async function () {
    await chromeDriver.findElement(By.name('registrar')).click();
});

Then('Se debe mostrar la cadena {string}', async function (expected) {
    await chromeDriver.findElement(By.id('msgRespuesta'))
        .getText().then(function (text) {
            showText = text;
        });

    expect(showText).to.eql(expected);
    await chromeDriver.quit();
});