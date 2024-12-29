const { Schema, model } = require("mongoose");
const productSchema = new Schema({
    name: String,
    price: Number,
    featured: {
        type: Boolean,
        default: false,},
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported',
        },
        // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
    }
})
const Product = model('Product', productSchema)
module.exports = Product;
