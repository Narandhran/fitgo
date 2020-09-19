const { Order } = require('../models/order');

module.exports = {
    placeOrder: async (request, cb) => {
        let orderObj = request.body;
        orderObj.soldBy = request.verifiedToken._id;
        await Order.create(orderObj, (err, result) => {
            if (!err) {

            }
            cb(err, result);
        });
    },
    getMyOrder: async (request, cb) => {
        await Order
            .find({ user_id: request.verifiedToken._id })
            .exec((err, result) => {
                cb(err, result);
            })
    }
};