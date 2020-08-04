const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

var figlet = require('figlet');

figlet('Hello, Siphiwe', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

const styledMessage = chalk.bgRed.blue(greet('Siphiwe'));
console.log(styledMessage)