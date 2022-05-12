const ADDRESS_TABLE_TEMPLATE = require('../../database/model/address-model/address-registration-model');
const generateUID = require('../../../commons/generate-id/generate-id');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const createAddress = async (request, response) => {
  try {
    const { address, address_status, userId } = request.body;

    await ADDRESS_TABLE_TEMPLATE.create({
      id: generateUID(),
      address,
      address_status,
      userId
    });

    return httpStatusResponse(201, ("Address has been created!"), 'Not found error');

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'Address registry repository');
    return finalError;
  }
}

module.exports = createAddress;