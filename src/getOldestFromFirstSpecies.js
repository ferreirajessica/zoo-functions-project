const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function findEmployee(id) {
  return employees.find((employee) => employee.id === id);
}

function firstAnimalResponsibleFor(id) {
  const whichAnimal = findEmployee(id).responsibleFor[0];
  return species.find((animal) => animal.id === whichAnimal);
}

function getOldestFromFirstSpecies(id) {
  const animalResidents = firstAnimalResponsibleFor(id).residents;
  const sorted = animalResidents.sort((a, b) => (b.age - a.age));
  const oldest = [sorted[0].name, sorted[0].sex, sorted[0].age];
  return oldest;
}

module.exports = getOldestFromFirstSpecies;
