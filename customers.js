const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bannerSchema = new Schema({
    _id:{type: Number},
    name:{type:String},
    email:{type: String},
    address:{type:String}
})

const Customer = mongoose.model('customer', bannerSchema)
module.exports = Customer;