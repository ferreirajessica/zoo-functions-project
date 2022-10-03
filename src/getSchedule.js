const { hours, species } = require('../data/zoo_data');

// encontra a informação completa dos animais que tem o dia parâmetro na agenda deles
function findGeneralAvailability(day) {
  return species.filter(((animal) => animal.availability.includes(day)));
}

// pega apenas os nomes dos animais que aparecem na função anterior, e esses nomes vão parar dentro da chave exhibittion de schedule
function displayGeneralAvailability(day) {
  return findGeneralAvailability(day).map((animal) => animal.name);
}

const schedule = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: displayGeneralAvailability('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: displayGeneralAvailability('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: displayGeneralAvailability('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: displayGeneralAvailability('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: displayGeneralAvailability('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: displayGeneralAvailability('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function findAvailability(scheduleTarget) {
  const zooAnimals = species.map((animal) => animal.name);
  const weekdays = Object.keys(schedule);
  if (zooAnimals.includes(scheduleTarget)) {
    const animalData = species.find((animal) => animal.name === scheduleTarget);
    return animalData.availability;
  }
  if (weekdays.includes(scheduleTarget)) {
    const result = { [scheduleTarget]: schedule[scheduleTarget] };
    return result;
  }
}

function getSchedule(scheduleTarget) {
  const zooAnimals = species.map((animal) => animal.name);
  const weekdays = Object.keys(schedule);
  const zooAnimalsPlusWeekdays = [...zooAnimals, ...weekdays];
  if (scheduleTarget === 'Monday') {
    return { Monday: schedule.Monday };
  }
  if (scheduleTarget === undefined || !zooAnimalsPlusWeekdays.includes(scheduleTarget)) {
    return schedule;
  }
  return findAvailability(scheduleTarget);
}

module.exports = getSchedule;
