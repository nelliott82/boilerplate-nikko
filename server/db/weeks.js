const Sequelize = require('sequelize');
const db = require('./db');

const Week = db.define('week', {
  week: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Week;
