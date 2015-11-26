if (typeof window === 'undefined') {
  var numberFormat = require('./numberFormat');
}


function superNumberFormat(number, dec, dsep, tsep) {
  return numberFormat(number, dec, dsep, tsep) + '!';
};

if (typeof window === 'undefined') {
  module.exports = superNumberFormat;
}
