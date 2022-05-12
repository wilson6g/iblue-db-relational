const USER_TABLE_TEMPLATE = require('../../database/model/user-model/user-registration-model');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const listAllUsers = async () => {
  try {
    const users = await USER_TABLE_TEMPLATE.findAll();

    return httpStatusResponse(200, (users), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'User all repository');
    return finalError;
  }
}

module.exports = listAllUsers;