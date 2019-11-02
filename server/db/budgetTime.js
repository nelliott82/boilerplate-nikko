const Sequelize = require('sequelize');
const db = require('./db');

const BudgetTime = db.define('budgetTime', {
  week: {
    type: Sequelize.DATE,
    // allowNull: false,
  },
  process: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  department: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  user: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  time: {
    type: Sequelize.DECIMAL(10, 2),
    // allowNull: false,
  }
});

module.exports = BudgetTime;
