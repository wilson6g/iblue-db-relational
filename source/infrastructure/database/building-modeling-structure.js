const USER_TABLE_TEMPLATE = require('./model/user-model/user-registration-model');
const ADDRESS_TABLE_TEMPLATE = require('./model/address-model/address-registration-model');

const databaseInitialize = () => {
  USER_TABLE_TEMPLATE.sync();
  ADDRESS_TABLE_TEMPLATE.sync();
}

module.exports = databaseInitialize;