if (typeof window === 'undefined') {
  var expect = require('expect.js');
  var superNumberFormat = require('../superNumberFormat.js');
}


describe('superNumberFormat', function() {

  it('should convert from 9000 to "9,000!"', function() {
    expect(superNumberFormat(9000)).to.be('9,000!');
  });
});
