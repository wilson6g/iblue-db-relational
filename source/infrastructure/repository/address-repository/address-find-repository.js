const ADDRESS_TABLE_TEMPLATE = require('../../database/model/address-model/address-registration-model');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const findAddressById = async (request, response) => {
  try {
    const id = request.params.id;

    const address = await ADDRESS_TABLE_TEMPLATE.findAll({
      where: {
        id: id,
      }
    });

    if(address.length == 0) return httpStatusResponse(400, ("Address not exists"), 'Not found error');

    return httpStatusResponse(200, (address), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(404, (error.message), 'Address find repository');
    return finalError;
  }
}

module.exports = findAddressById;