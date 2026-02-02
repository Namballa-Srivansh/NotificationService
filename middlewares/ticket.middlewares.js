const { STATUS } = require("../utils/constants");
const { errResponseBody, successResponseBody } = require("../utils/responsebody");

const verifyTicketNotificationCreateRequest = (req, res, next) => {
    if(!req.body.subject) {
        errResponseBody.error = "Subject is required";
        return res.status(STATUS.BAD_REQUEST).json(errResponseBody);
    }
    if(!req.body.content) {
        errResponseBody.error = "Content is required";
        return res.status(STATUS.BAD_REQUEST).json(errResponseBody);
    }
    if(!req.body.recipientEmails || !(req.body.recipientEmails instanceof Array) || req.body.recipientEmails.length === 0) {
        errResponseBody.error = "Recipient emails are required";
        return res.status(STATUS.BAD_REQUEST).json(errResponseBody);
    }

    next();
    
}

module.exports = {
    verifyTicketNotificationCreateRequest,
}
