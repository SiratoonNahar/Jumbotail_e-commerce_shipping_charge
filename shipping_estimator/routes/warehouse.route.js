const express = require('express');
const { warehouseModel } = require('../models/warehouse.model');
const { customerModel } = require('../models/customer.model');
const { sellerModel } = require('../models/seller.model');
const calculateDistance = require('../utils/calculateDistance');

const warehouserouter = express.Router();


warehouserouter.get('/warehouse/nearest', async (req, res) => {
    try {
        const { sellerId, productId } = req.query;

        const seller = await sellerModel.findById(sellerId);
        if (!seller) return res.status(404).json({ error: 'Seller not found' });

        const warehouses = await warehouseModel.find();
        let nearest = null;
        let minDistance = Infinity;

        warehouses.forEach((warehouse) => {
            const distance = calculateDistance(seller.location, warehouse.location);
            if (distance < minDistance) {
                minDistance = distance;
                nearest = warehouse;
            }
        });

        res.json({
            warehouseId: nearest._id,
            warehouseLocation: nearest.location,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


warehouserouter.get('/shipping-charge', async (req, res) => {
    try {
        const { warehouseId, customerId, deliverySpeed } = req.query;

        const warehouse = await warehouseModel.findById(warehouseId);
        const customer = await customerModel.findById(customerId);
        if (!warehouse || !customer) return res.status(404).json({ error: 'Invalid IDs' });

        const distance = calculateDistance(warehouse.location, customer.location);
        let rate = distance > 500 ? 1 : distance > 100 ? 2 : 3;

        const weight = 1; 
        let shippingCharge = rate * distance * weight;
        if (deliverySpeed === 'express') {
            shippingCharge += 1.2 * weight;
        }
        shippingCharge += 10; 

        res.json({ shippingCharge });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


warehouserouter.post('/shipping-charge/calculate', async (req, res) => {
    try {
        const { sellerId, customerId, deliverySpeed } = req.body;
        console.log('Request body:', req.body);

        const seller = await sellerModel.findById(sellerId);
        if (!seller) return res.status(404).json({ error: 'Seller not found' });

        const nearest = await findNearestWarehouse(seller.location);
        if (!nearest) return res.status(404).json({ error: 'No warehouses available' });

        const customer = await customerModel.findById(customerId);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });

        const distance = calculateDistance(nearest.location, customer.location);
        let rate = distance > 500 ? 1 : distance > 100 ? 2 : 3;

        const weight = 1; 
        let shippingCharge = rate * distance * weight;
        if (deliverySpeed === 'express') {
            shippingCharge += 1.2 * weight;
        }
        shippingCharge += 10; 

        res.json({
            shippingCharge,
            nearestWarehouse: {
                warehouseId: nearest._id,
                warehouseLocation: nearest.location,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = {warehouserouter};
