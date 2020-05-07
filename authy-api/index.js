const send = require('./enviarOTP')
const verify = require('./verificarOTP')
const config = require('./config')

const readline = require("readline");

async function main() {
    let sendResponse = await send.sendOTP(config.userId);
    console.log('sendResponse: ', sendResponse);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let otp;
    rl.question("Cual es el codigo de verificación que recibio por SMS? ", function (token) {
        otp = token;
        rl.close();
    });

    rl.on("close", async function () {
        let verifyResponse = await verify.verify(config.userId, otp)
        console.log('verifyResponse: ', verifyResponse);
        process.exit(0);
    });


}

main()