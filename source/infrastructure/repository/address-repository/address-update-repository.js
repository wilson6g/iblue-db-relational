const ADDRESS_TABLE_TEMPLATE = require('../../database/model/address-model/address-registration-model');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const addressUpdate = async (request, response) => {
  try {
    const { address, address_status, userId } = request.body;
    const id = request.params.id;

    await ADDRESS_TABLE_TEMPLATE.update({
      id,
      address,
      address_status,
      userId
    }, {
      where: {
        id: id,
      }
    });

    return httpStatusResponse(200, ("Address updated with successfully"), 'Not found error');

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'Address update repository');
    return finalError;
  }
}

module.exports = addressUpdate;