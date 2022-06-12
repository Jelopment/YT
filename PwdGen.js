const pwdGen = require('generate-password');

let password = pwdGen.generate({
    length: 30,
    numbers: true,
    symbols: true
});

console.log(password);