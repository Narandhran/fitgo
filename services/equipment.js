const { Equipment } = require('../models/equipment');

module.exports = {
    add: async (request, cb) => {
        let equipObj = request.body;
        equipObj.createdBy = request.verifiedToken._id;
        equipObj.updatedBy = request.verifiedToken._id;
        await Equipment.create(equipObj, (err, result) => {
            cb(err, result);
        })
    },
    update: async (request, cb) => {
        let equipObj = request.body;
        equipObj.updatedBy = request.verifiedToken._id;
        await Equipment
            .findByIdAndUpdate(request.params.id, equipObj, { new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    },
    updatePicture: async (request, cb) => {
        let upload = loadMulter.single('equipment');
        await upload(request, null, (err) => {
            if (err)
                cb(err);
            else {
                Equipment
                    .findByIdAndUpdate(request.params.id, {
                        image: request.file.filename
                    }, { new: true })
                    .exec((err, result) => {
                        cb(err, result);
                    });
            }
        });
    },
};