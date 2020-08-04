const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgRed.blue(greet('Xola'));
console.log(styledMessage)