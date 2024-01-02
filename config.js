const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connection to MongoDB Successful");
}).catch((error) => {
    console.error("Connection Error:", error);
});