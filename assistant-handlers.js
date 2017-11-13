const Promise = require('promise');
const moment = require('moment');
const ResponseBuilder = require('./mrkapil').ResponseBuilder;
const converse = require('./api-converse.js');

function welcome(inputData) {
  return new ResponseBuilder()
    .text('Hello there!')
    .buildAsPromise();
}

// TODO allow asking about next week
function isItOn(inputData) {
  const queryDate = moment();

  return converse.isLastNightOn(queryDate).then(
    result => Promise.resolve(result.converse.fullText),
    error => Promise.resolve(error.converse.fullText)
  ).then(text => new ResponseBuilder()
    .text(text)
    .buildAsPromise()
  );
}

function goodbye(inputData, isCancel) {
  return new ResponseBuilder()
    .text('Goodbye!')
    .buildAsPromise();
}

function fallback(inputData) {
  return new ResponseBuilder()
    .text('I\'m sory, I didn\'t understand')
    .buildAsPromise();
}

module.exports = {
  welcome,
  isItOn,
  goodbye,
  fallback
};
