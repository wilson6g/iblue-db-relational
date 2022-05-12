const { DataTypes } = require('sequelize');
const sequelize = require('../../../configuration/connect-database');
const USER_TABLE_TEMPLATE = require('../user-model/user-registration-model');

const ADDRESS_TABLE_TEMPLATE = sequelize.define('address', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

USER_TABLE_TEMPLATE.hasMany(ADDRESS_TABLE_TEMPLATE); // Set one to many relationship

module.exports = ADDRESS_TABLE_TEMPLATE;