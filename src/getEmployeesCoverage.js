const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function validateData(data) {
  const ids = employees.map((employee) => employee.id);
  const firstNames = employees.map((employee) => employee.firstName);
  const lastNames = employees.map((employee) => employee.lastName);
  if (!ids.includes(data) && !firstNames.includes(data) && !lastNames.includes(data)) {
    throw Error('Informações inválidas');
  }
  return true;
}

// retorna os nomes dos animais pelos quais o funcionário é responsável
function getSpecies(data) {
  const animalNames = [];
  const locations = [];
  const findEmployee = employees.find((employee) => employee.firstName === data
  || employee.lastName === data || employee.id === data);
  const animalIds = findEmployee.responsibleFor;
  const result = { animalNames, locations };
  animalIds.forEach((id) => animalNames.push(species.find((animal) => animal.id === id).name));
  animalIds.forEach((id) => locations.push(species.find((animal) => animal.id === id).location));
  return result;
}

// retorna as infos dos funcionários
function getEmployeesInfo(data) {
  const findEmployee = employees.find((employee) => employee.firstName === data
  || employee.lastName === data || employee.id === data);
  const employeeInfo = {
    id: [findEmployee][0].id,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}` };
  return employeeInfo;
}

function coverageInfo(info) {
  const idAndName = getEmployeesInfo(info);
  const tenderedAnimals = getSpecies(info);
  const animalsAndlocations = {
    id: idAndName.id,
    fullName: idAndName.fullName,
    species: tenderedAnimals.animalNames,
    locations: tenderedAnimals.locations,
  };
  return animalsAndlocations;
}

function getEmployeesCoverage(info) {
  const ids = employees.map((employee) => employee.id);
  const coverage = {};
  if (info === undefined) {
    const test = [];
    ids.forEach((id) => test.push(coverageInfo(id)));
    return test;
  }
  const infoKeys = Object.keys(info);
  const infoValues = Object.values(info);
  if (infoKeys.includes('name') || infoKeys.includes('id')) {
    if (validateData(infoValues[0]) === true) {
      Object.assign(coverage, coverageInfo(infoValues[0]));
    }
    return coverage;
  }
}

module.exports = getEmployeesCoverage;

console.log(getEmployeesCoverage());
// console.log(employees.map((employee) => employee.id));
// console.log(getSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// || employee[data] === employee.lastName || employee[data] === employee.id

/* em getSpecies, não era assim mas tava bonito:
animalIds.forEach((id) => names.push(
    { [species.find((animal) => animal.id === id).name]:
       species.find((animal) => animal.id === id).location },
  ));
  retornava [ { snakes: 'SW' }, { elephants: 'NW' } ] */
