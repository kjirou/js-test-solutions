if (typeof window === 'undefined') {
  var expect = require('expect.js');
  var numberFormat = require('../numberFormat.js');
}


describe('numberFormat', function() {

  it('should convert from 900 to "900"', function() {
    expect(numberFormat(900)).to.be('900');
  });

  it('should convert from 9000 to "9,000"', function() {
    expect(numberFormat(9000)).to.be('9,000');
  });

  it('should convert from 9000.1 to "9,000.1"', function() {
    expect(numberFormat(9000.1)).to.be('9,000.1');
  });
});
