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
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
  },
  otherExplanation: {
    type: Sequelize.TEXT,
  }
});

module.exports = ActualTime;
