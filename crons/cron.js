const cron = require("node-cron");
const Ticket = require("../models/ticketNotification");
const sendMail = require("../services/emailService");

cron.schedule('*/2 * * * *', async () => {
    const notificationsToBeSent = await Ticket.find({
        status: "PENDING"
    });

    notificationsToBeSent.forEach(notification => {
        const mailData = {
            from: "mba@support.com",
            to: notification.recipientEmail,
            subject: notification.subject,
            text: notification.content
        }
        sendMail(process.env.EMAIL, process.env.EMAIL_PASS, mailData);
    })

})



