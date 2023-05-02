// response.js

const logger = require("./logger");

const successResponse = (data, successStatus = 200) => {

    const response = { status: successStatus, data };
    //logger.info(response);
    return response;

}

const errorResponse = (error, errorStatus = 500) => {

    const response = { status: errorStatus, error };
    logger.error(error);
    return response;

}

module.exports = {
    successResponse,
    errorResponse,

};
