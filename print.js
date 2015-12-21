
var streamMsger = require('@maboiteaspam/stream-messenger')

module.exports = function print (what, where) {

  var fnTransform = function (chunk, enc, cb) {
    (where || console.log)(what)
    cb(null, chunk)
  };

  return streamMsger('print', fnTransform);
};
