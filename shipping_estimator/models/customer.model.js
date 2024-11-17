const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number, 
        required: true, validate: /\d{10}/
    },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = {
    customerModel,
};
