const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv"); 
const mongoose = require("mongoose");

const app = express();

env.config();  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, async () => {
    console.log(`Server started on port ${process.env.PORT}`);
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected");
    }catch (error) {
        console.log(error);
    }
});