const userCtl = require('../controllers/user');
const { AdminAndReceptionAndTrainer, AllUsers } = require('../utils/utility');

module.exports = app => {
    app.post('/user/register', userCtl.register);
    app.post('/user/login', userCtl.login);
    app.put('/user/update_dp', AllUsers, userCtl.updateDisplayPicture);
};