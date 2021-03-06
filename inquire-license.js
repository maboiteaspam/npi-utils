
var inquirer = require('inquirer');
var _ = require('lodash');
var streamMsger = require('@maboiteaspam/stream-messenger')

function chooseLicence (what, obj, property, licences) {

  licences = licences ||
    ['ISC', 'MIT', 'GPL', 'BSD ', 'LGPL', 'Apache', 'WTF']; // burn in hell. cheers.

  var fnTransform = function (chunk, enc, cb) {

    // see choosealicense.com
    var questions = [
      {
        type: "list",
        name: "response",
        choices: _.shuffle(licences),
        default: getRandomInt(0, licences.length-1),
        message: what
      }
    ];

    inquirer.prompt( questions, function( answers ) {
      obj[property] = answers['response'];
      cb(null, chunk)
    });

  };

  return streamMsger('inquire', fnTransform);
};
// copy paste from inquire-input until more refactoring.
chooseLicence.ifFalsy = function (what, obj, property, licences) {

  var fnTransform = function (chunk, enc, cb) {

    console.log(property, obj)
    if (!(property in obj) || !obj[property]) {

      var questions = [
        {
          type: "input",
          name: "response",
          message: what
        }
      ];

      inquirer.prompt( questions, function( answers ) {
        obj[property] = answers['response']
        cb(null, chunk)
      });

    } else {
      cb(null, chunk)
    }

  };

  return streamMsger('inquire', fnTransform);

}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = chooseLicence