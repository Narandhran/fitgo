const { add, update, updatePicture } = require('../services/equipment');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    add: (req, res) => {
        add(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Equipment added successfully', {});
        });
    },
    update: (req, res) => {
        update(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Equipment updated successfully', result);
        });
    },
    updatePicture: (req, res) => {
        updatePicture(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Updated successfully', result);
        });
    },
}