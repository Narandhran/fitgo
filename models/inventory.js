const { model, Schema } = require('mongoose');
var inventorySchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    availability: {
        type: Number
    },
    image: {
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

var Inventory = model('inventory', inventorySchema);
module.exports = { Inventory };


