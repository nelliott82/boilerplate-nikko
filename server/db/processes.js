const Sequelize = require('sequelize');
const db = require('./db');

const Process = db.define('process', {
  processName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Process;
