const Sequelize = require('sequelize');
const db = require('./db');

const Department = db.define('department', {
  departmentName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Department;
