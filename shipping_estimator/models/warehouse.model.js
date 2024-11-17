const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
});

const warehouseModel = mongoose.model('Warehouse', warehouseSchema);

module.exports = {
    warehouseModel,
};
