const { myFizzBuzz } = require('./challenges')

describe('myFizzBuzz', () => {
  it('expected fizzbuzz', () => {
    const expected = 'fizzbuzz';
    expect(myFizzBuzz(15)).toEqual(expect.stringContaining(expected));
  })

  it('expected fizzbuzz', () => {
    const expected = 'fizz';
    expect(myFizzBuzz(3)).toEqual(expect.stringContaining(expected));
  })

  it('expected fizzbuzz', () => {
    const expected = 'buzz';
    expect(myFizzBuzz(5)).toEqual(expect.stringContaining(expected));
  })

  it('expected fizzbuzz', () => {
    const expected = 4;
    expect(myFizzBuzz(4)).toBe(expected);
  })

  it('expected fizzbuzz', () => {
    const expected = false;
    expect(myFizzBuzz('n')).toBe(expected);
  })

});