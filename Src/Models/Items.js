const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    itemNo: {
        type: Number,
        required: true,
        unique: true,
      },
      itemName: {
        type: String,
        required: true,
      },
      inventoryLocation: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true,
      },
      stockUnit: {
        type: String,
        enum: ['Kg', 'Litre', 'Piece'], 
        required: true,
      },
      unitPrice: {
        type: Number,
        required: true,
      },
      itemImages: [{
        type: String,
      }],
      status: {
        type: String,
        enum: ['Enabled', 'Disabled'],
        default: 'Enabled',
      },
    }, { timestamps: true });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
