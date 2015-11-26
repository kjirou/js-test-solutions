QUnit.test('numberFormat should convert from 900 to "900"', function(assert) {
  assert.equal(numberFormat(900), '900');
});

QUnit.test('numberFormat should convert from 9000 to "9,000"', function(assert) {
  assert.equal(numberFormat(9000), '9,000');
});

QUnit.test('numberFormat should convert from 9000.1 to "9000.1"', function(assert) {
  assert.equal(numberFormat(9000.1), '9,000.1');
});
