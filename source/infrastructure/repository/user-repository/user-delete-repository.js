const USER_TABLE_TEMPLATE = require('../../database/model/user-model/user-registration-model');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const deleteById = async (id) => {
  try {
      const userDeleted = await USER_TABLE_TEMPLATE.destroy({
        where: { 
          id: id
        }
      });

      return userDeleted;
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'User delete repository');
    return finalError;
  }
}

module.exports = deleteById;