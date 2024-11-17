const express=require('express');
const {mongoConnection}=require('./config/mongodbConnection')
const calculateDistance = require('./utils/calculateDistance')
const {warehouserouter} = require('./routes/warehouse.route')
require('dotenv').config();

const app=express()

app.use(express.json())

const PORT = process.env.PORT||5000;

app.use('/api/v1',warehouserouter)

app.listen(PORT,async()=>{
    try{
        await mongoConnection;
        console.log('Mongodb connected successfully')
        console.log(`Server is running on port ${PORT}`)

    }catch(error){
        console.log(error.message);
        

    }
})