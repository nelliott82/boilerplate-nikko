/* eslint-disable complexity */
/* eslint-disable max-statements */
const { green, red } = require('chalk');
const {
  db,
  Company,
  Department,
  Process,
  User,
  Week,
  ActualTime,
  BudgetTime,
} = require('./server/db');
const faker = require('faker');

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Company.create({
      companyName: 'Company A',
    });
    await Company.create({
      companyName: 'Company B',
    });
    await Company.create({
      companyName: 'Company C',
    });
    await Company.create({
      companyName: 'Company D',
    });

    const accounting = await Department.create({
      departmentName: 'Accounting',
    });
    const legal = await Department.create({
      departmentName: 'Legal',
    });
    const tax = await Department.create({
      departmentName: 'Tax',
    });
    const humanResources = await Department.create({
      departmentName: 'Human Resources',
    });

    const accountsReceive = await Process.create({
      processName: 'Accounts Receivable',
    });
    await accountsReceive.addDepartment(accounting);

    const accountsPayable = await Process.create({
      processName: 'Accounts Payable',
    });
    await accountsPayable.addDepartment(accounting);

    const corporateAllocations = await Process.create({
      processName: 'Corporate Allocations',
    });
    await corporateAllocations.addDepartment(accounting);

    const ownerAllocations = await Process.create({
      processName: 'Owner Allocations',
    });
    await ownerAllocations.addDepartment(accounting);

    const fixedAssets = await Process.create({
      processName: 'Fixed Assets',
    });
    await fixedAssets.addDepartment(accounting);

    const legalResearch = await Process.create({
      processName: 'Legal Research',
    });
    await legalResearch.addDepartment(legal);

    const legalDeposition = await Process.create({
      processName: 'Legal Deposition',
    });
    await legalDeposition.addDepartment(legal);

    const contractWriting = await Process.create({
      processName: 'Contract Writing',
    });
    await contractWriting.addDepartment(legal);

    const negotiations = await Process.create({
      processName: 'Negotiations',
    });
    await negotiations.addDepartment(legal);

    const formPreparation = await Process.create({
      processName: 'Form Preparation',
    });
    await formPreparation.addDepartment(tax);

    const propertyTax = await Process.create({
      processName: 'Property Tax',
    });
    await propertyTax.addDepartment(tax);

    const incomeTax = await Process.create({
      processName: 'Income Tax',
    });
    await incomeTax.addDepartment(tax);

    const taxPayable = await Process.create({
      processName: 'Tax Payable',
    });
    await taxPayable.addDepartment(tax);

    const taxReceivable = await Process.create({
      processName: 'Tax Receivable',
    });
    await taxReceivable.addDepartment(tax);

    const employeeSearch = await Process.create({
      processName: 'Employee Search',
    });
    await employeeSearch.addDepartment(humanResources);

    const employeeExit = await Process.create({
      processName: 'Employee Exit',
    });
    await employeeExit.addDepartment(humanResources);

    const benefits = await Process.create({
      processName: 'Benefits',
    });
    await benefits.addDepartment(humanResources);

    const salary = await Process.create({
      processName: 'Salary',
    });
    await salary.addDepartment(humanResources);

    const acquisition = await Process.create({
      processName: 'Acquisition',
    });
    await acquisition.addDepartment(legal);
    await acquisition.addDepartment(tax);
    await acquisition.addDepartment(accounting);

    const disposition = await Process.create({
      processName: 'Disposition',
    });
    await disposition.addDepartment(legal);
    await disposition.addDepartment(tax);
    await disposition.addDepartment(accounting);

    const other = await Process.create({
      processName: 'Other',
    });
    await other.addDepartment(legal);
    await other.addDepartment(tax);
    await other.addDepartment(accounting);
    await other.addDepartment(humanResources);

    for (let i = 0; i < 3; i++) {
      let departments = [tax, accounting, legal, humanResources];
      for (let j = 0; j < 5; j++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let employee = await User.create({
          name: firstName + ' ' + lastName,
          employeeId: Math.floor(Math.random() * 1000),
          email: firstName.charAt(0) + lastName + '@company.com',
          password: '12345',
        });
        await employee.addDepartment(departments[i]);
      }
    }

    for (let i = 0; i < 4; i++) {
      let departments = [tax, accounting, legal, humanResources];
      for (let j = 0; j < 1; j++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let employee = await User.create({
          name: firstName + ' ' + lastName,
          employeeId: Math.floor(Math.random() * 1000),
          email: firstName.charAt(0) + lastName + '@company.com',
          password: '12345',
          isManager: true,
        });
        await employee.addDepartment(departments[i]);
      }
    }

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    const adminEmployee = await User.create({
      name: firstName + ' ' + lastName,
      employeeId: Math.floor(Math.random() * 1000),
      email: firstName.charAt(0) + lastName + '@company.com',
      password: '12345',
      isAdmin: true,
    });

    await adminEmployee.addDepartment(accounting);

    let friday = new Date(2020, 0, 3, 5, 0, 0);
    for (let i = 0; i < 52; i++) {
      if (i === 0) {
        await Week.create({
          week: friday,
        });
      } else {
        let nextWeek = friday.setDate(friday.getDate() + 7);
        await Week.create({
          week: nextWeek,
        });
      }
    }

    for (let i = 1; i < 53; i++) {
      for (let j = 1; j < 17; j++) {
        let deptIdData = await User.findOne({
            where: {
                id: j
            },
            include: [
                {model: Department}
            ]
        })
        let deptId = deptIdData.dataValues.departments[0].dataValues.id
        await ActualTime.create({
          week: i,
          process: Math.ceil(Math.random() * 21),
          department: deptId,
          user: j,
          time: Math.round(Math.random() * 10000) / 100,
        });
      }
    }

    for (let i = 1; i < 53; i++) {
        for (let j = 1; j < 17; j++) {
          let deptIdData = await User.findOne({
              where: {
                  id: j
              },
              include: [
                  {model: Department}
              ]
          })
          let deptId = deptIdData.dataValues.departments[0].dataValues.id
          await BudgetTime.create({
            week: i,
            process: Math.ceil(Math.random() * 21),
            department: deptId,
            user: j,
            time: Math.round(Math.random() * 10000) / 100,
          });
        }
      }


    for (let i = 1; i < 53; i++) {
        for (let j = 17; j < 21; j++) {
          let deptIdData = await User.findOne({
              where: {
                  id: j
              },
              include: [
                  {model: Department}
              ]
          })
          let deptId = deptIdData.dataValues.departments[0].dataValues.id
          await ActualTime.create({
            week: i,
            process: 21,
            department: deptId,
            user: j,
            time: Math.round(Math.random() * 10000) / 100,
            otherExplanation: faker.random.words(3),
          });
        }
      }
  
      for (let i = 1; i < 53; i++) {
          for (let j = 17; j < 21; j++) {
            let deptIdData = await User.findOne({
                where: {
                    id: j
                },
                include: [
                    {model: Department}
                ]
            })
            let deptId = deptIdData.dataValues.departments[0].dataValues.id
            await BudgetTime.create({
              week: i,
              process: Math.ceil(Math.random() * 21),
              department: deptId,
              user: j,
              time: Math.round(Math.random() * 10000) / 100,
            });
          }
        }

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
