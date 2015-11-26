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

describe('async', function() {

  it('1秒後に少なくともnew Dateの時刻が進んでいること', function(done) {
    var beforeDate = new Date();
    setTimeout(function() {
      assert(beforeDate.getTime() < new Date().getTime());
      done();
    }, 1000)
  });
});

describe('before/after', function() {

  var db = null;
  var findUserByName = function(name) {
    return db.users.filter(function(user) {
      return user.name === name;
    })[0] || null;
  }

  before(function() {
    db = {
      users: [
        { name: 'Taro', age: 15 },
        { name: 'Jiro', age: 12 }
      ]
    };
  });

  after(function() {
    db = null;
  });

  describe('findUserByName', function() {

    it('存在する名前を指定した場合、objectを返す', function() {
      var actual = findUserByName('Taro');
      assert.strictEqual(typeof actual, 'object');
    });

    it('存在しない名前を指定した場合、nullを返す', function() {
      var actual = findUserByName('Saburo');
      assert.strictEqual(actual, null);
    });
  });
});
