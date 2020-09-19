const { model, Schema } = require('mongoose');
var orderSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    inventories: [{
        id: {
            type: Schema.Types.ObjectId,
            ref: 'inventory'
        },
        quantity: Number,
        unitPrice: Number
    }],
    totalAmount: {
        type: String
    },
    soldBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true });

module.exports = { Order };

var Order = model('order', orderSchema);