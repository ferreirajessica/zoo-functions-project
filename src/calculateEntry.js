const { prices } = require('../data/zoo_data');

function calculateAge(age) {
  if (age < 18) {
    return 'child';
  }
  if (age < 50) {
    return 'adult';
  }
  if (age >= 50) {
    return 'senior';
  }
}

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  const ages = entrants.map((person) => person.age);
  ages.forEach((age) => {
    if (calculateAge(age) === 'child') {
      child += 1;
    }
    if (calculateAge(age) === 'adult') {
      adult += 1;
    }
    if (calculateAge(age) === 'senior') {
      senior += 1;
    }
  });
  const result = { child, adult, senior };
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrantsAges = Object.entries(countEntrants(entrants)).sort();
  const priceTable = Object.entries(prices).sort();
  const priceCalc = (entrantsAges[0][1] * priceTable[0][1])
  + (entrantsAges[1][1] * priceTable[1][1]) + (entrantsAges[2][1] * priceTable[2][1]);
  return priceCalc;
}

module.exports = { calculateEntry, countEntrants };
