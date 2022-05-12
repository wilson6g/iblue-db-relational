const { DataTypes } = require('sequelize');
const sequelize = require('../../../configuration/connect-database');

const USER_TABLE_TEMPLATE = sequelize.define('user', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }
})

module.exports = USER_TABLE_TEMPLATE;