var assert = require("chai").assert;
var expect    = require("chai").expect;
var modulo = require("../app/logic/billetera.js");


describe("TestBilletera",function(){

    describe("Test al constructor", function() {

        it('Al crear la billetera con un monto 0, este monto se refleja en el saldo', function () {
            montoInicial = 0;
            billetera = new modulo.Billetera(montoInicial);
            saldo = billetera.consultarSaldo();
            saldoEsperado = 0;
            assert.equal(saldo, saldoEsperado);
        });

        it('Al crear la billetera con un monto > 0, este monto se refleja en el saldo', function () {
            montoInicial = 50;
            billetera = new modulo.Billetera(montoInicial);
            saldo = billetera.consultarSaldo();
            saldoEsperado = 50;
            assert.equal(saldo, saldoEsperado);
        });

        it('Al crear la billetera con un monto < 0, este debe lanzar la excepcion "Monto Inicial no debe ser menor a 0"', function () {
           expect(() => new modulo.Billetera(-1)).to.throw(Error, /Monto Inicial no debe ser menor a 0/);
        });
    });

    describe("Test al metodo 'registrar ingreso'", function() {

        it('Si la billetera tiene un monto inicial = 0, entonces al ejecutar el metodo "registrar ingreso" con un monto mayor a cero, este monto se refleja como nuevo monto de la billetera', function () {
            montoInicial = 0;
            ingreso = 25;
            billetera = new modulo.Billetera(montoInicial);
            billetera.registrarIngreso(ingreso);
            saldo = billetera.consultarSaldo();
            saldoEsperado = ingreso;
            assert.equal(saldo, saldoEsperado);
        });

        it('Si la billetera tiene un monto inicial = 0, entonces al ejecutar el metodo "registrar ingreso" con un monto igual a cero, la billetera continua en saldo 0', function () {
            montoInicial = 0;
            ingreso = 0;
            billetera = new modulo.Billetera(montoInicial);
            billetera.registrarIngreso(ingreso);
            saldo = billetera.consultarSaldo();
            saldoEsperado = 0;
            assert.equal(saldo, saldoEsperado);
        });

        it('Si la billetera tiene un monto inicial > 0, entonces al ejecutar el metodo "registrar ingreso" con un monto mayor a cero, este monto se aumenta al saldo inicial de la billetera', function () {
            montoInicial = 10;
            ingreso = 16;
            billetera = new modulo.Billetera(montoInicial);
            billetera.registrarIngreso(ingreso);
            saldo = billetera.consultarSaldo();
            saldoEsperado = montoInicial + ingreso;
            assert.equal(saldo, saldoEsperado);
        });

        it('Si la billetera tiene un monto inicial > 0, entonces al ejecutar el metodo "registrar ingreso" con un monto igual a cero, la billetera continua con el saldo que tenia inicialmente', function () {
            montoInicial = 150;
            ingreso = 0;
            billetera = new modulo.Billetera(montoInicial);
            billetera.registrarIngreso(ingreso);
            saldo = billetera.consultarSaldo();
            saldoEsperado = montoInicial;
            assert.equal(saldo, saldoEsperado);
        });

        it('Si se ejecuta el metodo "registrar ingreso" con un monto menor a cero, se lanza una excepcion "Monto no debe ser menor a 0"', function () {
            montoInicial = 150;
            billetera = new modulo.Billetera(montoInicial);
            expect(() => billetera.registrarIngreso(-1)).to.throw(Error, /Monto no debe ser menor a 0/);
        });
    });

    describe("Test al metodo 'registrar salida'", function() {

        it('Si la billetera tiene un monto inicial = 0, entonces al ejecutar el metodo "registrar salida" con un monto mayor a cero, se lanza una excepcion "Saldo insuficiente en la billetera"', function () {
            montoInicial = 0;
            billetera = new modulo.Billetera(montoInicial);
            expect(() => billetera.registrarSalida(100)).to.throw(Error, /Saldo insuficiente en la billetera/);
        });

        it('Si la billetera tiene un monto inicial = 0, entonces al ejecutar el metodo "registrar salida" con un monto igual a cero, la billetera continua en saldo 0', function () {
            montoInicial = 0;
            salida = 0;
            billetera = new modulo.Billetera(montoInicial);
            billetera.registrarSalida(salida);
            saldo = billetera.consultarSaldo();
            saldoEsperado = 0;
            assert.equal(saldo, saldoEsperado);
        });

        it('Si la billetera tiene un monto inicial > 0, entonces al ejecutar el metodo "registrar salida" con un monto mayor a cero, este monto se disminuye al saldo de la billetera', function () {
            montoInicial = 20;
            salida = 4;
            billetera = new modulo.Billetera(montoInicial);
            billetera.registrarSalida(salida);
            saldo = billetera.consultarSaldo();
            saldoEsperado = montoInicial - salida;
            assert.equal(saldo, saldoEsperado);
        });

        it('Si la billetera tiene un monto inicial > 0, entonces al ejecutar el metodo "registrar salida" con un monto igual a cero, la billetera continua con el saldo que tenia inicialmente', function () {
            montoInicial = 150;
            salida = 0;
            billetera = new modulo.Billetera(montoInicial);
            billetera.registrarSalida(salida);
            saldo = billetera.consultarSaldo();
            saldoEsperado = montoInicial;
            assert.equal(saldo, saldoEsperado);
        });

        it('Si se ejecuta el metodo "registrar salida" con un monto menor a cero, se lanza una excepcion "Monto no debe ser menor a 0"', function () {
            montoInicial = 150;
            billetera = new modulo.Billetera(montoInicial);
            expect(() => billetera.registrarSalida(-1)).to.throw(Error, /Monto no debe ser menor a 0/);
        });

        it('Si la billetera tiene un monto inicial > 0, entonces al ejecutar el metodo "registrar salida" con un monto mayor al saldo, se lanza una excepcion "Saldo insuficiente en la billetera"', function () {
            montoInicial = 100;
            billetera = new modulo.Billetera(montoInicial);
            expect(() => billetera.registrarSalida(120)).to.throw(Error, /Saldo insuficiente en la billetera/);
        });
    });
});

