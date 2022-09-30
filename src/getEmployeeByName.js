const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.filter(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  )[0];
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
