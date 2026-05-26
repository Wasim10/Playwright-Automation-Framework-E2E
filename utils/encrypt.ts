import cryptoJs from 'crypto-js';

const secretKey = 'mySecretKey123';

const encryptedUser = cryptoJs.AES.encrypt('Admin', secretKey).toString();
const encryptedPass = cryptoJs.AES.encrypt('admin123', secretKey).toString();

console.log('USER_NAME=' + encryptedUser);
console.log('PASSWORD=' + encryptedPass);