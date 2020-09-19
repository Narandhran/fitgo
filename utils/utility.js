const { tokenVerification, authorize } = require('../middlewares/auth');
module.exports = {

    /**
     * Static variables
     */

    onlyNumber: '123456789',
    onlySmallCase: 'abcdefghijklmnopqrstuvwxyz',
    onlyBigCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    alphaNumeric: `${this.onlyNumber}${this.onlySmallCase}${this.onlyBigCase}`,
    specialString: `${this.alphaNumeric}_@-#`,
    /**
     * Authorization utils
     */
    AdminOnly: [tokenVerification, authorize(['System Admin'])],
    AdminAndReception: [tokenVerification, authorize(['System Admin', 'Receptionist'])],
    AdminAndReceptionAndTrainer: [tokenVerification, authorize(['System Admin', 'Receptionist', 'Trainer'])],
    AllUsers: [tokenVerification, authorize(['System Admin', 'Receptionist', 'Trainer', 'Customer'])],

    /**
     * Generator utils
     */
    autoGen: (genLength, getChar) => {
        var length = genLength;
        var charset = getChar;
        let persisted = '';
        for (let i = 0, n = charset.length; i < length; ++i) {
            persisted += charset.charAt(Math.floor(Math.random() * n));
        }
        return persisted;
    }

    /**
     * Date utils
     */
};