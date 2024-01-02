const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bannerSchema = new Schema({
    _id:{type: Number},
    name:{type:String},
    price:{type: Number},
    stock:{type:Number}
})

const Product = mongoose.model('product', bannerSchema)
module.exports = Product;