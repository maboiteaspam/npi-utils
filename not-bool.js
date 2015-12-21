
var streamMsger = require('@maboiteaspam/stream-messenger')

module.exports = function notBool (obj, long, short) {

  var fnTransform = function (chunk, enc, cb) {
    if (long && (long in obj || obj[long]) && obj[long]!==true && obj[long]!==false) {
      return cb(null, chunk);
    }
    if (short && (short in obj || obj[short]) && obj[short]!==true && obj[short]!==false) {
      return cb(null, chunk);
    }
    console.error('Missing value '+long+' or '+short)
    return cb()
  };

  return streamMsger('notBool', fnTransform);
};
