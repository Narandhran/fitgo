const { hashSync, compareSync, genSaltSync } = require('bcrypt-nodejs');

/*
 * Custom
 * Crypto Service
 */

module.exports = {
    encrypt: async (plainText) => {
        return await hashSync(plainText,  genSaltSync(10));
    },
    validate: (plainText, hashText) => {
        if (compareSync(plainText, hashText))
            return true;
        else
            return false;
    },
    generatePassword: () => {
        var length = 12;
        let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
        let persisted = '';
        for (let i = 0, n = charset.length; i < length; ++i) {
            persisted += charset.charAt(Math.floor(Math.random() * n));
        }
        return persisted;
    }
};