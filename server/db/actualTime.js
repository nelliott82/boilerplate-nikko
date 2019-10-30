const Sequelize = require('sequelize');
const db = require('./db');

const ActualTime = db.define('actualTime', {
  week: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  process: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  department: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  user: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  time: {
    type: Sequelize.NUMBER,
    allowNull: false,
  }
});

module.exports = ActualTime;
