const db = require('./db');
const Company = require('./companies');
const Department = require('./departments');
const Process = require('./processes');
const User = require('./users');
const Week = require('./weeks');
const ActualTime = require('./actualTime');
const BudgetTime = require('./budgetTime');
const ReforecastTime = require('./reforecastTime');

User.belongsToMany(Department, { through: 'DepartmentUser' });
Process.belongsToMany(Department, { through: 'DepartmentProcess' });

module.exports = {
  db,
  Company,
  Department,
  Process,
  User,
  Week,
  ActualTime,
  BudgetTime,
  ReforecastTime,
};
