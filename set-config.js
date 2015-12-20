
var streamMsger = require('stream-messenger')

module.exports = function setConfig (conf, where, what, onlyIfNew) {

  var fnTransform = function (chunk, enc, cb) {
    if (onlyIfNew && (where in conf.all || !conf.get(where))) return cb(null, chunk)
    conf.set(where, what)
    cb(null, chunk)
  };

  return streamMsger('setConfig', fnTransform);
};
