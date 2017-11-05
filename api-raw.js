const Promise = require('promise');
const moment = require('moment');

const schedule = require('./schedule.js');

function isLastNightOn(queryDate) {
  const rangeMin = moment(queryDate).startOf('week').startOf('day');
  const rangeMax = moment(queryDate).endOf('week').endOf('day');

  return new Promise((resolve, reject) => {
    episodes = schedule.episodes
      .filter(episode =>
        moment(episode.date).isBetween(rangeMin, rangeMax, 'day', '[]')
      );

    const isThereDataAfter = schedule.episodes.filter(episode =>
      moment(episode.date).isAfter(rangeMin)
    ).length > 0;

    const isThereDataBefore = schedule.episodes.filter(episode =>
      moment(episode.date).isBefore(rangeMax)
    ).length > 0;

    const isThereData = isThereDataAfter && isThereDataBefore;

    if (episodes.length > 0) {
      return resolve({
        isLastNightOn: true,
        episode: episodes[0],
        isThereData,
        isThereDataAfter,
        isThereDataBefore
      });
    } else {
      return resolve({
        isLastNightOn: false,
        episode: null,
        isThereData,
        isThereDataAfter,
        isThereDataBefore
      });
    }
  });
}

module.exports = {
  isLastNightOn: isLastNightOn
};
