const Sequelize = require('sequelize');
const db = require('./db');

const ActualTime = db.define('actualTime', {
  week: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  process: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  otherExplanation: {
    type: Sequelize.TEXT,
  }
});

module.exports = ActualTime;
