const ADDRESS_TABLE_TEMPLATE = require('../../database/model/address-model/address-registration-model');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const deleteById = async (id) => {
  try {
      const addressDeleted = await ADDRESS_TABLE_TEMPLATE.destroy({
        where: { 
          id: id
        }
      });

      return addressDeleted;
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'Address delete repository');
    return finalError;
  }
}

module.exports = deleteById;