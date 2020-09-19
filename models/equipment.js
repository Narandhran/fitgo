const { model, Schema } = require('mongoose');
var eqipmentSchema = new Schema({
    name: {
        type: String
    },
    brand: {
        type: String
    },
    type: {
        type: String
    },
    image: {
        type:String
    },
    warranty: {
        type: String
    },
    purchaseDate: {
        type: String
    },
    service: {
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


var Equipment = model('equipment', eqipmentSchema);
module.exports = { Equipment };