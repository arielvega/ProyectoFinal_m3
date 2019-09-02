var assert = require("chai").assert;
var modulo = require("../app/logic/billetera.js");


describe("TestBilletera",function(){
    describe("Test al constructor", function() {
        it('Al crear la billetera con un monto 0, este monto se refleja en el saldo', function () {
            billetera = new modulo.Billetera(0);
            saldo = billetera.consultarSaldo();
            saldoEsperado = 0;
            assert.equal(saldo, saldoEsperado);
        });

        it('Al crear la billetera con un monto > 0, este monto se refleja en el saldo', function () {
            billetera = new modulo.Billetera(50);
            saldo = billetera.consultarSaldo();
            saldoEsperado = 50;
            assert.equal(saldo, saldoEsperado);
        });
    });

});

