module.exports = {
    Control: function() {
        var _modulo = require("../logic/billetera.js");
        var _billetera = new _modulo.Billetera(0);
        var _validarNumero = function (numero) {
            numero = Number.parseFloat(numero);
            if (Number.isNaN(numero)){
                throw new Error('El dato debe ser un numero');
            }
            return numero;
        };
        this.ingreso = function (req, res) {
            resultado = {};
            try {
                monto = _validarNumero(req.body.monto);
                _billetera.registrarIngreso(monto);
                nuevoSaldo = _billetera.consultarSaldo();
                moneda = _billetera.consultarMoneda();
                resultado.mensaje =  'Se ha ingresado '+ monto + ' ' + moneda +' a la billetera, el nuevo saldo es: ' + nuevoSaldo + ' ' + moneda;
                resultado.saldo = nuevoSaldo;
                resultado.estado = 'OK';
            } catch (e) {
                resultado.mensaje = e.toString();
                resultado.saldo = _billetera.consultarSaldo();
                resultado.estado = 'ERROR';
            }
            res.json(resultado);
        };
        this.salida = function (req, res) {
            resultado = {};
            try {
                monto = _validarNumero(req.body.monto);
                _billetera.registrarSalida(monto);
                nuevoSaldo = _billetera.consultarSaldo();
                moneda = _billetera.consultarMoneda();
                resultado.mensaje =  'Se ha retirado '+ monto + ' ' + moneda +' de la billetera, el nuevo saldo es: ' + nuevoSaldo + ' ' + moneda;
                resultado.saldo = _billetera.consultarSaldo();
                resultado.estado = 'OK';
            } catch (e) {
                resultado.mensaje = e.toString();
                resultado.saldo = _billetera.consultarSaldo();
                resultado.estado = 'ERROR';
            }
            res.json(resultado);
        };
        this.saldo = function (req, res) {
            resultado = {};
            try {
                saldo = _billetera.consultarSaldo();
                moneda = _billetera.consultarMoneda();
                resultado.mensaje =  'Saldo: ' + saldo + ' ' + moneda;
                resultado.saldo = saldo;
                resultado.estado = 'OK';
            } catch (e) {
                resultado.mensaje = e.toString();
                resultado.saldo = _billetera.consultarSaldo();
                resultado.estado = 'ERROR';
            }
            res.json(resultado);
        };
        this.exit = function (req, res) {
            resultado = {mensaje: "Servidor dado de baja correctamente"};
            res.json(resultado);
            console.log('Servidor dado de baja correctamente bajo solicitud');
            process.exit();
        };
    }
};