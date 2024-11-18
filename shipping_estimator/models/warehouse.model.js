const mongoose = require('mongoose');
const warehouseSchema = new mongoose.Schema({
    name: String,
    location: {
        lat: Number,
        lng: Number
    }
});
const warehouseModel = mongoose.model('Warehouse', warehouseSchema);




module.exports = {
    warehouseModel,
};
