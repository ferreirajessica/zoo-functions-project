const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('returns undefined when arguments are undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('returns an error message when type of argument is not string', () => {
    const error = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(1)).toMatch(error);
    expect(handlerElephants({ search: 'popularity' })).toMatch(error);
    expect(handlerElephants(['popularity', 'availability'])).toMatch(error);
  });
  it('returns the desired info according to arguments', () => {
    expect(handlerElephants('name')).toMatch('elephants');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toMatch('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual([
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ]);
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('namae')).toBe(null);
  });
});
