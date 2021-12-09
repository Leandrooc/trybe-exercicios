const { myRemove } = require('./challenges');

describe('myRemove Test 2', () => {
  const expected = [1,2,4];
  it('Array return 1,2,4', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(expect.arrayContaining(expected));
  })

  it('Test 2 - Array not return 1,2,3,4', () => {
    const expected = [1,2,3,4];
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(expect.not.arrayContaining(expected));
  })

  it('Test 3 - Array return 1,2,3,4', () => {
    const expected = [1,2,3,4];
    expect(myRemove([1, 2, 3, 4], 5)).toEqual(expect.arrayContaining(expected));
  })
})