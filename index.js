const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv");
const mongoose = require("mongoose");
const Cron = require("./crons/cron");
const app = express();


env.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ticketRoutes = require("./routes/tickets.routes");
ticketRoutes(app);

app.listen(process.env.PORT, async () => {

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
    Cron.mailerCron();
});