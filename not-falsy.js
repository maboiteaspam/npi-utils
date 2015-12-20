
var streamMsger = require('stream-messenger')

module.exports = function notFalsy (obj, long, short) {

  var fnTransform = function (chunk, enc, cb) {
    if (long && (long in obj) || obj[long]) {
      return cb(null, chunk);
    }
    if (short && (short in obj) || obj[short]) {
      return cb(null, chunk);
    }
    console.error('Missing value '+long+' or '+short)
    return cb()
  };

  return streamMsger('notFalsy', fnTransform);
};
