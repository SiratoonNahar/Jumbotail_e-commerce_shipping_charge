const request = require('supertest');
const app = require('../index'); 

describe('Shipping Charge API', () => {

  it('should get nearest warehouse for a seller', async () => {
    const res = await request(app)
      .get('/api/v1/warehouse/nearest?sellerId=123&productId=456');
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('warehouseId');
    expect(res.body).toHaveProperty('warehouseLocation');
  });

  it('should calculate shipping charge for a customer from a warehouse', async () => {
    const res = await request(app)
      .get('/api/v1/shipping-charge?warehouseId=789&customerId=456&deliverySpeed=express');
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('shippingCharge');
  });

  it('should calculate shipping charges for a seller and customer', async () => {
    const res = await request(app)
      .post('/api/v1/shipping-charge/calculate')
      .send({
        sellerId: "123",
        customerId: "456",
        deliverySpeed: "express"
      });
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('shippingCharge');
    expect(res.body).toHaveProperty('nearestWarehouse');
    expect(res.body.nearestWarehouse).toHaveProperty('warehouseId');
  });

});
