require('dotenv').config();
require("./config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: '*' }));

app.get("/", (req, res) => {
    try {
        res.send("My name is Akhilesh Sharma")

    } catch (error) {
        console.log(error)
    }
})

app.listen(5050, () => console.log("Server Started"));