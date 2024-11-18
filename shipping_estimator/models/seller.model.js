const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    dimensions: String 
});
const sellerSchema = new mongoose.Schema({
    name: String,
    products: [productSchema]
});
const sellerModel = mongoose.model('Seller', sellerSchema);

module.exports = {
    sellerModel,
};
