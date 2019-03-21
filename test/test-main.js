var main = require('../src/main');
var expect = require('chai').expect;

describe('sample()', () => {
  context('this is to check things are working', () => {
    const expected = 'cool beans';
    it('should return the sample string', () => {
      expect(main.sample()).to.be.a('string').that.includes(expected)
    })
  })

})