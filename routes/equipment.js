const equipCtrl = require('../controllers/equipment');
const { AdminAndReceptionAndTrainer, AllUsers } = require('../utils/utility');

module.exports = app => {
    app.post('/equipment/create', AdminAndReceptionAndTrainer, equipCtrl.add);
    app.put('/equipment/update/:id', AdminAndReceptionAndTrainer, equipCtrl.update);
    app.put('/equipment/update_image/:id', AdminAndReceptionAndTrainer, equipCtrl.updatePicture);

}