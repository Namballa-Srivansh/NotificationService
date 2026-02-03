const nodemailer = require("nodemailer");
const env = require("dotenv");
env.config();

const mailer = (userId, password, mailData) => {
    return nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: userId,
            pass: password
        }
    });
}


module.exports = mailer;