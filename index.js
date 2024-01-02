require('dotenv').config();
require("./config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors({ origin: '*' }));
const Product = require("./products");
const Customer = require("./customers")
const Order = require("./orders")

app.use(express.json({ limit: '10mb' }));

app.post("/addProducts", async (req, res) => {
    try {
        let input = req.body
        let response = await Product.insertMany(input);
        res.send(response)
    } catch (error) {
        console.log(error)
    }
});
app.post("/addCustomers", async (req, res) => {
    try {
        console.log(req.body)
        // let response = await Customer.insertMany(input);
        // res.send(response)
    } catch (error) {
        console.log(error)
    }
});
app.post("/addOrders", async (req, res) => {
    try {
        console.log("Iam here")
        let input = req.body
        let response = await Order.insertMany(input);
        res.send(response)
    } catch (error) {
        console.log(error)
    }
});
app.get("/", async (req, res) => {
    try {
        let response = await Order.find({}).populate("customer_id");
        res.send(response)
    } catch (error) {
        console.log(error)
    }
});

app.listen(5050, () => console.log("Server Started"));