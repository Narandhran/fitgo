const { request } = require('express');
const { Plan } = require('../models/plan');

module.exports = {
    add: async (request, cb) => {
        let equipObj = request.body;
        equipObj.createdBy = request.verifiedToken.userId;
        equipObj.updatedBy = request.verifiedToken.userId;
        await Plan.create(equipObj, (err, result) => {
            cb(err, result);
        })
    },
    update: async (request, cb) => {
        let equipObj = request.body;
        equipObj.updatedBy = request.verifiedToken.userId;
        await Plan
            .findByIdAndUpdate(request.params.id, equipObj, { new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    },
    list: async (request, cb) => {
        await Plan
            .find({})
            .exec((err, result) => {
                cb(err, result);
            });
    },
    remove: async (request, cb) => {
        await Plan
            .remove({ _id: request.params.id })
            .exec((err, result) => {
                cb(err, result);
            });
    }
};