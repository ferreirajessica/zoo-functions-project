const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// function displayGeneralInfo(animal) {
//   const info = {
//     animal.residents.length;
//   }
//   return info;
// }

function generalSpeciesInfo(animal) {
  // const animalInfo = { [animal]: species[0].residents.length };
  const specsInfo = species.filter((zooAnimal) => zooAnimal.name === animal);
  const info = { [animal]: specsInfo[0].residents.length };
  return info;
}

function speciesQuantity(animal) {
  // const animalInfo = { [animal]: species[0].residents.length };
  const specsInfo = species.filter((zooAnimal) => zooAnimal.name === animal);
  const info = specsInfo[0].residents.length;
  return info;
}

function speciesInfoBySex(animal, sex) {
  const specsInfo = species.filter((zooAnimal) => zooAnimal.name === animal);
  const quantity = specsInfo[0].residents.filter((
    animalOfspecificSex,
  ) => animalOfspecificSex.sex === sex).length;
  const info = quantity;
  return info;
}

function animalsGeneralInfo() {
  const info = {};
  species.forEach((zooAnimal) => Object.assign(info, generalSpeciesInfo(zooAnimal.name)));
  return info;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return animalsGeneralInfo();
  }
  if (Object.entries(animal).length === 1) {
    const animalName = Object.values(animal)[0];
    return speciesQuantity(animalName);
  }
  if (Object.entries(animal).length === 2) {
    const animalName = Object.values(animal)[0];
    const animalSex = Object.values(animal)[1];
    return speciesInfoBySex(animalName, animalSex);
  }
}

// console.log(speciesInfo('lions'));
// console.log(speciesInfoBySex('lions', 'female'));
// console.log(countAnimals());
// console.log(countAnimals({ specie: 'lions' }));
// console.log(countAnimals({ specie: 'lions', sex: 'female' }));
// console.log(species[0].residents[1].sex);

module.exports = countAnimals;
