const { encode } = require('./challenges')


describe('encode', () => {
  it('expected encoded array', () => {
    const expected = [1,2];
    expect(encode(['a,e'])).toEqual(expect.stringContaining(expected));
  })


})