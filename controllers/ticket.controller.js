const notificationService = require("../services/notification.service");
const {errResponseBody, successResponseBody} = require("../utils/responsebody");
const { STATUS } = require("../utils/constants");

const createTicket = async (req, res) => {
    try {
        const response = await notificationService.create(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "Ticket created successfully";
        return res.status(STATUS.CREATED).json(successResponseBody);
    } catch(error) {
        if(error.err) {
            errResponseBody.error = error.err;
            return res.status(error.code).json(errResponseBody);
        }
        errResponseBody.error = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errResponseBody);
    }
}

const getAllTickets = async (req, res) => {
    try {
        const response = await notificationService.getAll();
        successResponseBody.data = response;
        successResponseBody.message = "All tickets fetched successfully";
        return res.status(STATUS.OK).json(successResponseBody);
    } catch(error) {
        errResponseBody.error = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errResponseBody);
    }
}

const getTicket = async (req, res) => {
    try {
        const response = await notificationService.getById(req.params.id);
        successResponseBody.data = response;
        successResponseBody.message = "Ticket fetched successfully";
        return res.status(STATUS.OK).json(successResponseBody);
    } catch(error) {
        if(error.err) {
            errResponseBody.error = error.err;
            return res.status(error.code).json(errResponseBody);
        }
        errResponseBody.error = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errResponseBody);
    }
}

module.exports = {
    createTicket,
    getAllTickets,
    getTicket,
}
