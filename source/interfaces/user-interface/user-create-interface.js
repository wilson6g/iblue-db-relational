const express = require('express');
const validateFieldsCreateUser = require('../../controllers/user-controller/user-create-controller');
const userCreate = require('../../infrastructure/repository/user-repository/user-registration-repository');
const createUserInterface = express.Router();

createUserInterface.post('/api/user', async (request, response) => {
  const isFieldsValid = validateFieldsCreateUser(request, response);
  console.log(isFieldsValid);
  if(isFieldsValid != true) return response.sendStatus(400).send();

  const userCreated = await userCreate(request, response);
  
  response.status(userCreated.statusCode).json({userCreated}).send();
});

module.exports = createUserInterface;