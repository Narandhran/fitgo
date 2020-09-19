const { Inventory } = require('../models/inventory');
const { loadMulter} = require('./custom/multipart.service');

module.exports = {
    addInventory: async (request, cb) => {
        let inventoryObj = request.body;
        inventoryObj.createdBy = request.verifiedToken._id;
        inventoryObj.updatedBy = request.verifiedToken._id;
        await Inventory.create(Request.body, (err, result) => {
            cb(err, result);
        })
    },
    updateInventory: async (request, cb) => {
        let inventoryObj = request.body;
        inventoryObj = request.body;
        inventoryObj.updatedBy = request.verifiedToken._id;
        await Inventory
            .findByIdAndUpdate(request.params.id, inventoryObj, { new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    },
    updatePicture: async (request, cb) => {
        let upload = loadMulter.single('inventory');
        await upload(request, null, (err) => {
            if (err)
                cb(err);
            else {
                Inventory
                    .findByIdAndUpdate(request.params.id, {
                        image: request.file.filename
                    }, { new: true })
                    .exec((err, result) => {
                        cb(err, result);
                    });
            }
        });
    }
}