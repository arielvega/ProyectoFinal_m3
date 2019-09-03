const { setWorldConstructor } = require("cucumber");

class CustomWorld {
    constructor() {
        this.mensaje = '';
        this.saldo = 0;
        this.estado = '';
    }

    loadFromResponse(response) {
        try{
            this.mensaje = response.mensaje;
            this.saldo = response.saldo;
            this.estado = response.estado;
        } catch (e) {
            this.loadError(e);
        }
    }

    loadFromError(error) {
        this.mensaje = error.toString();
        this.estado = 'ERROR';
    }
}

setWorldConstructor(CustomWorld);
