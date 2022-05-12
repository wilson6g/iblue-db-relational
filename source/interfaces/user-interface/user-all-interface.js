const express = require('express');
const listAllUsers = require('../../infrastructure/repository/user-repository/user-all-repository');
const allUserInterface = express.Router();

allUserInterface.get('/api/user', async (request, response) => {
  const listUsers = await listAllUsers(request, response);
  
  return response.status(listUsers.statusCode).json({listUsers}).send();
});

module.exports = allUserInterface;