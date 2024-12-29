const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('Success!!!!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
 //start();
const print = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        const result = await Product.find({});
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
    process.exit(1);
}
print();
