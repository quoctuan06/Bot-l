const chalk = require('chalk');

const log = (data, option, prefix, textColor) => {
  const coloredData = chalk.bold[textColor](`${prefix} ${data}`);
  console.log(coloredData);
};

module.exports = (data, option) => {
  switch (option) {
    case 'warn':
      log(data, option, '『 WARN 』 →', 'white');
      break;
    case 'error':
      log(data, option, '『 ERROR 』 →', 'white');
      break;
    default:
      log(data, option, `${option} :`, 'white');
      break;
  }
};

module.exports.loader = (data, option) => {
  switch (option) {
    case 'warn':
      log(data, option, '『CatEmpress 』→', 'white');
      break;
    case 'error':
      log(data, option, '『CatEmpress 』→', 'white');
      break;
    default:
      log(data, option, '『CatEmpress 』→', 'white');
      break;
  }
};
