const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('returns all days and hours when it receives no arguments', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('returns the zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:09-AM')).toMatch(/The zoo is closed/);
    expect(getOpeningHours('Tuesday', '01:00-AM')).toMatch(/The zoo is closed/);
    expect(getOpeningHours('Wednesday', '10:00-PM')).toMatch(/The zoo is closed/);
    expect(getOpeningHours('Thursday', '01:00-AM')).toMatch(/The zoo is closed/);
    expect(getOpeningHours('Friday', '02:00-AM')).toMatch(/The zoo is closed/);
    expect(getOpeningHours('Saturday', '07:00-AM')).toMatch(/The zoo is closed/);
    expect(getOpeningHours('Sunday', '09:00-PM')).toMatch(/The zoo is closed/);
  });
  it('returns the zoo is open', () => {
    expect(getOpeningHours('Tuesday', '08:00-AM')).toMatch(/The zoo is open/);
    expect(getOpeningHours('Wednesday', '10:00-AM')).toMatch(/The zoo is open/);
    expect(getOpeningHours('Thursday', '01:00-PM')).toMatch(/The zoo is open/);
    expect(getOpeningHours('Friday', '02:00-PM')).toMatch(/The zoo is open/);
    expect(getOpeningHours('Saturday', '07:00-PM')).toMatch(/The zoo is open/);
    expect(getOpeningHours('Sunday', '09:00-AM')).toMatch(/The zoo is open/);
  });
});
