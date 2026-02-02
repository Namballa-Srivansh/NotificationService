const notificationController = require("../controllers/ticket.controller");
const ticketMiddlewares = require("../middlewares/ticket.middlewares")
const router = (app) => {
    app.post(
        "/notiservice/api/v1/notifications",
        ticketMiddlewares.verifyTicketNotificationCreateRequest,
        notificationController.createTicket
    );

    app.get(
        "/notiservice/api/v1/notifications",
        notificationController.getAllTickets
    );

    app.get(
        "/notiservice/api/v1/notifications/:id",
        notificationController.getTicket
    );
}

module.exports = router;