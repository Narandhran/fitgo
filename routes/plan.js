const planCtrl = require('../controllers/plan');
const { AdminAndReceptionAndTrainer } = require('../utils/utility');

module.exports = app => {
    app.post('/plan/create', AdminAndReceptionAndTrainer, planCtrl.add);
    app.put('/plan/update/:id', AdminAndReceptionAndTrainer, planCtrl.update);
    app.get('/plan/list', AdminAndReceptionAndTrainer, planCtrl.list);
    app.delete('/plan/remove/:id',AdminAndReceptionAndTrainer,planCtrl.remove);
}