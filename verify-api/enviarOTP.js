const config = require('./config')
const client = require('twilio')(config.accountSid, config.accessToken);

exports.sendOTP = async (phoneNumber) => {

    return client.verify.services(config.sid)
        .verifications
        .create({ to: phoneNumber, channel: 'sms' })
        .then(verification => {
            console.log('Codigo enviado correctamente', verification);
            return verification
        })
        .catch(err => {
            console.error('Error enviando codigo de verificacion', err);
            return err
        })
}

