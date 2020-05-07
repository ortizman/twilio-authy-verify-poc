const config = require('./config')
const authy = require('authy')(config.API_KEY);

exports.sendOTP = async (userId) => {

    return new Promise((resolve, reject) =>{
        authy.request_sms(userId, function (err, res) {
            if (err){
                console.log('Error en el envio', err)
                reject(err)
            } 
            console.log('Se envio el mensaje', res)
            resolve(res)
        });   
    })

}

