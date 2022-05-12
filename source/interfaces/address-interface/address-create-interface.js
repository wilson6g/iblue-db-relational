const express = require('express');
const createAddressInterface = express.Router();
const validateFieldsCreateAddress = require('../../controllers/address-controller/address-create-controller');
const createAddress = require('../../infrastructure/repository/address-repository/address-registration-repository');

createAddressInterface.post('/api/address', async (request, response) => {
  const isFieldsValid = await validateFieldsCreateAddress(request, response);
  console.log(isFieldsValid);
  if(isFieldsValid != true) return response.status(400).send();

  const addressCreated = await createAddress(request, response);

  response.status(addressCreated.statusCode).send();
})


module.exports = createAddressInterface;