const config = require('./config')
const client = require('twilio')(config.accountSid, config.accessToken);

exports.verify = async (phoneNumber, otp) => {
    return client.verify.services(config.sid)
        .verificationChecks
        .create({ to: phoneNumber, code: otp })
        .then(verificationCheck => {
            console.log(verificationCheck.status)
            return verificationCheck
        })
        .catch(err => {
            console.error('error verificando el OTP', err);
        })

}
