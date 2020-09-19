const orderCtrl = require('../controllers/order');
const { AdminAndReceptionAndTrainer, AllUsers } = require('../utils/utility');

module.exports = app => {
    app.post('/order/place_order', AdminAndReceptionAndTrainer, orderCtrl.placeOrder);
    app.get('/order/get_my_order', AllUsers, orderCtrl.getMyOrder);
};