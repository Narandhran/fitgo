const { addInventory, updateInventory, updatePicture } = require('../services/inventory');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    addInventory: (req, res) => {
        addInventory(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Inventory added successfully', {});
        });
    },
    updateInventory: (req, res) => {
        updateInventory(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Inventory updated successfully', result);
        });
    },
    updatePicture: (req, res) => {
        updatePicture(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Updated successfully', result);
        });
    },
}