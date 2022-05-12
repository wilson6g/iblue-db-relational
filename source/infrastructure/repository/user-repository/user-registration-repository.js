const USER_TABLE_TEMPLATE = require('../../database/model/user-model/user-registration-model');
const generateUID = require('../../../commons/generate-id/generate-id');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const userCreate = async (request, response) => {
  try {
    const { name, birthDate } = request.body;

    await USER_TABLE_TEMPLATE.create({
      id: generateUID(),
      name,
      birthDate
    });

    return httpStatusResponse(201, ("User has been created!"), 'Not found error');

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'User registry repository');
    return finalError;
  }
}

module.exports = userCreate;