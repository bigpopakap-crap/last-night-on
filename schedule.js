const moment = require('moment');

const jsData = [
  {
    title: 'Equifax security breach',
    date: moment('2017-10-15')
  },
  {
    title: 'National Flood Insurance Program',
    date: moment('2017-10-29')
  },
  {
    date: moment('2017-11-05')
  },
  {
    date: moment('2017-11-12')
  }
];

module.exports = {
  episodes: jsData
};
