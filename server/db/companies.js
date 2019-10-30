const Sequelize = require('sequelize');
const db = require('./db');

const Company = db.define('company', {
  companyName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Company;
