const mongoose = require('mongoose')

const supplierSchema = mongoose.Schema({
    supplierNo:{
        type: Number,
        required: true,
        unique: true,
    },
    supplierName: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      taxNo: {
        type: String,
        required: true,
        unique: true,
      },
      country: {
        type: String,
        required: true,
      },
      mobileNo: {
        type: String,
        required: true,
        match: /^\d{10,15}$/,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      status: {
        type: String,
        enum: ['Active', 'Inactive', 'Blocked'],
        default: 'Active',
      },
    }, { timestamps: true });

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
