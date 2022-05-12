const USER_TABLE_TEMPLATE = require('../../database/model/user-model/user-registration-model');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const userUpdate = async (request, response) => {
  try {
    const { name, birthDate } = request.body;
    const id = request.params.id;

    await USER_TABLE_TEMPLATE.update({
      id,
      name,
      birthDate
    }, {
      where: {
        id: id,
      }
    });

    return httpStatusResponse(200, ("User updated with successfully"), 'Not found error');

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'User update repository');
    return finalError;
  }
}

module.exports = userUpdate;