const { getMyOrder, placeOrder } = require('../services/order');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    placeOrder: (req, res) => {
        placeOrder(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', {});
        });
    },
    getMyOrder: (req, res) => {
        getMyOrder(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Listed successfully', {});
        });
    },
}