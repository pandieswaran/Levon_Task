const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productDetailsSchema = new schema({
    ProductId: {
        type: String,
        required: true
    },
    ProductName: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);

module.exports = ProductDetails;
