const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [
        {
            name: {
                type: String, required: true
            },
            price: { type: Number, required: true },
            attributes: {
                weight: { type: Number, required: true },
                dimension: { type: String, required: true },
            },
        },
    ],
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
});

const sellerModel = mongoose.model('Seller', sellerSchema);

module.exports = {
    sellerModel,
};
