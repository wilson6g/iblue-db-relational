const express = require('express');
const validateFieldsUpdateUser = require('../../controllers/user-controller/user-update-controller');
const userUpdate = require('../../infrastructure/repository/user-repository/user-update-repository');
const updateUserDomain = require('../../domains/user-domain/user-update-domain');
const updateUserInterface = express.Router();

updateUserInterface.put('/api/user/:id', async (request, response) => {
  const isFieldsValid = validateFieldsUpdateUser(request, response);

  if (isFieldsValid != true)  response.sendStatus(400).send();

  // const alreadyExists = await updateUserDomain(request, response);

  // if(alreadyExists != true)  response.sendStatus(400).send();

  const userUpdated = await userUpdate(request, response);
  response.status(userUpdated.statusCode).json({userUpdated}).send();
});

module.exports = updateUserInterface;