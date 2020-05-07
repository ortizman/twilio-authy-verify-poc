const config = require('./config')
const authy = require('authy')(config.API_KEY);

exports.verify = async (userId, otp) => {
    return new Promise((resolve, reject) => {
        authy.verify(userId, token = otp, function (err, res) {
            if (err) {
                console.log('Error en la verificacion', err)
                return reject(err)
            }

            console.log(res.message)
            resolve(res)
        });
    })
}
