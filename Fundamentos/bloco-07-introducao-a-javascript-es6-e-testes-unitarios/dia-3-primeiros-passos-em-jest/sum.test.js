let sum = require('./sum');

test('sum test one', () => {
  expect(sum(4,5)).toBe(9);
});

test('sum test two', () => {
  expect(sum(0,0)).toBe(0);
});

test('sum test three', () => {
  expect(()=> sum(4,"5")).toThrowError();
});