var numberFormat = require('./lib/number-format');
var superNumberFormat = require('./lib/super-number-format');


window.document.addEventListener('DOMContentLoaded', function() {
  window.numberFormat = numberFormat;
  window.superNumberFormat = superNumberFormat;
});
