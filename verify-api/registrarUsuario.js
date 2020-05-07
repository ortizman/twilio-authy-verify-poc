const config = require('./config')
const authy = require('authy')(config.API_KEY);

let userId = config.userId;
authy.register_user('manuel.ortiz@fluxit.com.ar', '1167585157', '54', function (err, res) {
    if (err) return console.log('Error en el registro', err);
    console.log('Se registro el usuario  con id', res.user.id);

    userId = res.user.id;

});
