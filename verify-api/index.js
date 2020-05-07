const send = require('./enviarOTP')
const verify = require('./verificarOTP')
const config = require('./config')

const readline = require("readline");

async function main() {

    const rlnumber = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let phoneNumber;
    rlnumber.question("Ingrese el numero de celular a verificar:  ", function (number) {
        phoneNumber = number;
        rlnumber.close();
    });

    rlnumber.on("close", async function () {
        let sendResponse = await send.sendOTP(phoneNumber);
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
            let verifyResponse = await verify.verify(phoneNumber, otp)
            console.log('verifyResponse: ', verifyResponse);
            process.exit(0);
        });
    });





}

main()