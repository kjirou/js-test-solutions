var numberFormat = require('./number-format');


module.exports = function superNumberFormat(number, dec, dsep, tsep) {
  return numberFormat(number, dec, dsep, tsep) + '!';
};
