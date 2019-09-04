module.exports = function(app) {
    var _modulo = require("./control.js");
    var control = new _modulo.Control();

    app.route('/api/exit/')
        .get(control.exit);

    app.route('/api/ingreso/')
        .post(control.ingreso);

    app.route('/api/salida/')
        .post(control.salida);

    app.route('/api/saldo/')
        .get(control.saldo);

};