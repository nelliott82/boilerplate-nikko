const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  employeeId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isManager: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

// User.beforeValidate(function(user) {
//   if (user.isAdmin === 'true') {
//     user.isAdmin = true;
//   } else {
//     user.isAdmin = false;
//   }
// });

// User.beforeValidate(function(user) {
//   if (user.isManager === 'true') {
//     user.isManager = true;
//   } else {
//     user.isManager = false;
//   }
// });

module.exports = User;
