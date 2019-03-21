const main = require('../src/main');
const {expect} = require('chai');

describe('sample()', () => {
  context('this is to check things are working', () => {
    const expected = 'cool beans';
    it('should return the sample string', () => {
      expect(main.sample()).to.be.a('string').that.includes(expected);
    });
  });

  context('this is to check more things are working', () => {
    it('should return 0', () => {
      const expected = 0;
      expect(main.math()).to.be.a('number').that.equals(expected);
    });

    it('should return 2', () => {
      const expected = 2;
      expect(main.math(1, 1)).to.be.a('number').that.equals(expected);
    });
  });
});