const { register, login,updateDisplayPicture } = require('../services/user');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    register: (req, res) => {
        register(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Successfully registered', result);
        });
    },
    login: (req, res) => {
        login(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Login success', result);
        });
    },
    updateDisplayPicture: (req, res) => {
        updateDisplayPicture(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Updated successfully', result);
        });
    },
};