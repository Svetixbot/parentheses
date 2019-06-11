const check = require('./check');

describe('balanced parantheses check', () => {
  it('should be balanced for an empty line', () => {
    expect(check('')).toBeTruthy();
  })

  it('should be unbalanced for single "("', () => {
    expect(check('(')).toBeFalsy();
  })
})