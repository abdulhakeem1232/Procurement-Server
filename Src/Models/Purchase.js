const mongoose = require('mongoose');
const generateUniqueNumber = require('./../Service/GenerateUniqueNumber');

const orderItemSchema = new mongoose.Schema({
    itemNo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item', 
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    stockUnit: {
        type: String,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    packingUnit: {
        type: String,
        enum: ['Kg', 'Litre', 'Piece'], 
        required: true,
    },
    orderQty: {
        type: Number,
        required: true,
    },
    itemAmount: {
        type: Number,
        required: true,
        default: function() {
            return this.orderQty * this.unitPrice;
        },
    },
    discount: {
        type: Number,
        required: true,
        default: 0,
    },
    netAmount: {
        type: Number,
        required: true,
        default: function() {
            return this.itemAmount - this.discount;
        },
    },
});

const orderSchema = new mongoose.Schema({
    orderNo: {
        type: Number,
        required: true,
        unique: true,
    },
    orderDate: {
        type: Date, 
        required: true,
        default: Date.now,
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier', 
        required: true,
    },
    items: [orderItemSchema],
    itemTotal: {
        type: Number,
        required: true,
        default: 0,
    },
    discount: {
        type: Number,
        required: true,
        default: 0,
    },
    netAmount: {
        type: Number,
        required: true,
        default: 0,
    },
}, { timestamps: true });


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
