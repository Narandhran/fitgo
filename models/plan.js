const { model, Schema } = require('mongoose');
var planSchema = new Schema({
    name: {
        type: String
    },
    duration: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });

var Plan = model('plan', planSchema);
module.exports = { Plan };