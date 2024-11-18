const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    location: {
        lat: Number,
        lng: Number
    }
});
const customerModel = mongoose.model('Customer', customerSchema);




module.exports = {
    customerModel,
};
