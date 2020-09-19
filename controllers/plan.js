const { add, update,list,remove } = require('../services/plan');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    add: (req, res) => {
        add(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Plan added successfully', {});
        });
    },
    update: (req, res) => {
        update(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Plan updated successfully', result);
        });
    },
    list: (req, res) => {
        list(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Plan listed successfully', result);
        });
    },
    remove: (req, res) => {
        remove(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Plan removed successfully', result);
        });
    },
}