import cryptoJs from 'crypto-js';   

export default class CommonUtils {
    
    //   * Encrypts a given string using AES encryption with a predefined secret key.     

    private secretKey: string;
/**
 * Initializes the CommonUtils class by setting the secret key for encryption. The secret key is retrieved from the environment variables, and if it is not provided, an error is thrown to ensure that the encryption functionality can work properly.
 */
    constructor() {
        this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : '';

        if(process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        } else {
            throw new Error('Please provide the SECRET KEY in the environment variables');
        }

    }
    /**
     * Encrypts a given string using AES encryption with a predefined secret key.
     * @param data The string to encrypt.
     * @returns The encrypted string.
     */
    public encryptData(data: string) {
        const encryptedData =  cryptoJs.AES.encrypt(data, this.secretKey).toString();     
        console.log('Encrypted Data: ', encryptedData.toString()); 
        return encryptedData;
    }


    public decryptData(encdata: string) {
     const decryptedBytes = cryptoJs.AES.decrypt(encdata, this.secretKey).toString(cryptoJs.enc.Utf8);
   //  console.log('Decrypted Data: ', decryptedBytes);
     return decryptedBytes;
    }
    
    }
