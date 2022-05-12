const ADDRESS_TABLE_TEMPLATE = require('../../database/model/address-model/address-registration-model');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const listAllAddresses = async () => {
  try {
    const addresses = await ADDRESS_TABLE_TEMPLATE.findAll();

    return httpStatusResponse(200, (addresses), 'Not found error');
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'Address all repository');
    return finalError;
  }
}

module.exports = listAllAddresses;