module.exports = {
    Billetera: function(montoInicial){
        var _saldo;
        _saldo = function(_montoInicial) {
            if (_montoInicial<0){
                throw new Error("Monto Inicial no debe ser menor a 0");
            }
            return _montoInicial
        }(montoInicial);
        this.consultarSaldo = function () {
            return _saldo;
        };
        ajustarSaldo = function () {
            _saldo = Math.round(_saldo * 100) / 100;
        }
        var _moneda;
        _moneda = 'Bs.';
        this.consultarMoneda = function () {
            return _moneda;
        };
        this.registrarIngreso = function(monto){
            if (monto<0){
                throw new Error("Monto no debe ser menor a 0");
            }
            _saldo += monto;
            ajustarSaldo();
            return _saldo;
        };
        this.registrarSalida = function(monto){
            if (monto<0){
                throw new Error("Monto no debe ser menor a 0");
            }
            if (monto >_saldo){
                throw new Error("Saldo insuficiente en la billetera");
            }
            _saldo -= monto;
            ajustarSaldo();
            return _saldo;
        };
    }
}

