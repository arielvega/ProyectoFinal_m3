module.exports = {
    Billetera: function(montoInicial){
        this.monto = montoInicial;
        this.consultarSaldo = function () {
            return this.monto;
        }
    }
}

