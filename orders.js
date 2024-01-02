const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id:{ type: Number },
    customer_id: { type: Number, ref: "customer" }, 
    products: [{
        _id:{ type: Number },
        product_id: { type: Number, ref: "product" },
        quantity: { type: Number }
    }],
    saleDate: { type: Date }
});

const Orders = mongoose.model('Order', orderSchema);
module.exports = Orders;
