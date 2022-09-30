const { employees } = require('../data/zoo_data');

function compareArray(arr, data) {
  if (!arr.includes(data)) {
    arr.push(data);
  }
}

function getManagers() {
  const storage = [];
  const managers = [];
  employees.forEach((employee) => storage.push(employee.managers));
  storage.forEach((managerSection) => managerSection.filter(
    (managerId) => compareArray(managers, managerId),
  ));
  return managers;
}

function isManager(id) {
  if (getManagers().includes(id)) {
    return true;
  }
  return false;
}

// function whoAreTheManagers() {
//   return employees.filter((employee) => isManager(employee.id));
// }

function getRelatedEmployees(managerId) {
  const manageesFinal = [];
  if (isManager(managerId) === true) {
    const managees = (employees.filter((employee) => employee.managers.includes(managerId)));
    managees.forEach((managee) => manageesFinal.push(`${managee.firstName} ${managee.lastName}`));
    return manageesFinal;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(getRelatedEmployees('c1f50212-35a6-4ecd-8223-f835538526c2'));
// console.log(whoAreTheManagers());
// console.log(getManagers());
// console.log(employees.length);
// console.log(employees);

module.exports = { isManager, getRelatedEmployees };
