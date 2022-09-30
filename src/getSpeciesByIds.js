const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function findAnimal(id) {
  return species.find((animal) => animal.id === id);
}

function getSpeciesByIds(...ids) {
  const info = [];
  ids.forEach((id) => info.push(findAnimal(id)));
  return info;
}

module.exports = getSpeciesByIds;
