const { expect } = require('chai');

const nLenNum = require('../index');


describe('Validates random number generator', () => {
  it('should generate 3 length ', () => {
    expect(nLenNum().length).to.equal(3);
    expect(nLenNum(3).length).to.equal(3);
  });
  it('should generate 4 length ', () => {
    expect(nLenNum(4).length).to.equal(4);
  });
  it('should generate 0 length ', () => {
    expect(nLenNum(0).length).to.equal(3);
  });
});
