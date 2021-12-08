let sum = require('./sum');

describe('sum test one', () => {
  it('sum returns 9', () => {
    expect(sum(4,5)).toBe(9);
  })

it('sum returns 0', () => {
  expect(sum(0,0)).toBe(0);
});

it('sum returns parameters must be numbers', () => {
  expect(()=> sum(4,"5")).toThrowError();
});

});