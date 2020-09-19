const inventoryCtrl = require('../controllers/inventory');
const { AdminAndReceptionAndTrainer, AllUsers } = require('../utils/utility');
module.exports = app => {
    /**
     * Staff only
     */
    app.post('/inventory/create', AdminAndReceptionAndTrainer, inventoryCtrl.addInventory);
    app.put('/inventory/update/:id', AdminAndReceptionAndTrainer, inventoryCtrl.updateInventory);
    app.put('/inventory/update_image/:id', AdminAndReceptionAndTrainer, inventoryCtrl.updatePicture);
}