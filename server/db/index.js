const db = require('./db');
const Company = require('./companies');
const Department = require('./departments');
const Process = require('./processes');
const User = require('./users');
const Week = require('./weeks');
const ActualTime = require('./actualTime');
const BudgetTime = require('./budgetTime');
const ReforecastTime = require('./reforecastTime');

Department.hasMany(User, { as: User });
Department.hasMany(Process, { as: Process });

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
