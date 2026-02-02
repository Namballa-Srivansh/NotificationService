const notificationController = require("../controllers/ticket.controller");
const ticketMiddlewares = require("../middlewares/ticket.middlewares")
const router = (app) => {
    app.post(
        "/notiserviceapi/v1/notifications",
        ticketMiddlewares.verifyTicketNotificationCreateRequest,
        notificationController.createTicket
    );
}

module.exports = router;