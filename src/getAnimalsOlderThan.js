const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const desiredSpecies = species.find((zooAnimal) => zooAnimal.name === animal);
  const { residents } = desiredSpecies;
  return residents.every((myResidents) => myResidents.age >= age);
}

module.exports = getAnimalsOlderThan;

// A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada.

/* species: [
    {
      id: lionId,
      name: 'lions',
      popularity: 4,
      location: 'NE',
      availability: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
      residents: [
        {
          name: 'Zena',
          sex: 'female',
          age: 12,
        }, */
