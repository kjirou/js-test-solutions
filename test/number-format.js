var assert = require('assert');

var numberFormat = require('../lib/number-format');


describe('numberFormat', function() {

  it('should convert from 900 to "900"', function() {
    assert.strictEqual(numberFormat(900), '900');
  });

  it('should convert from 9000 to "9,000"', function() {
    assert.strictEqual(numberFormat(9000), '9,000');
  });

  it('should convert from 9000.1 to "9,000.1"', function() {
    assert.strictEqual(numberFormat(9000.1), '9,000.1');
  });
});
