const nodemailer = require("nodemailer");
const env = require("dotenv");
env.config();

const sendMail = (userId, password) => {
    const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    });

    transport.sendMail({
        from: "mba@support.com",
        to: "notificationservice32@gmail.com",
        subject: "Test Email",
        text: "This is another test email"
    });
    console.log("Email sent");
}


module.exports = sendMail;