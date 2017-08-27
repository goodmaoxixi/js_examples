/**
 * Created on Dec. 18, 2016 Sun.
 * https://github.com/substack/minimist
 * parse argument options
 *
 * How do I pass command line arguments?
 * http://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments
 *
 * slice(2)
 * $ node example/parse.js -a beep -b boop
 * { _: [], a: 'beep', b: 'boop' }

 * slice(2)
 * $ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
 * { _: [ 'foo', 'bar', 'baz' ],
 *  x: 3,
 *  y: 4,
 *  n: 5,
 *  a: true,
 *  b: true,
 *  c: true,
 *  beep: 'boop' }
 */
var parseArgs = require('minimist');
var path = require("path");
var fs = require("fs");

var options = {
  alias: {
    'b': 'local_address',
    'r': 'remote_port',
    'k': 'password',
    'c': 'config_file',
    'm': 'method'
  },
  string: ['local_address', 'password', 'method', 'config_file'],
  "default": {
    'config_file': path.resolve(__dirname, "config.json")
  }
};

//console.log("The type of argv is " + typeof(process.argv) + "\n");

//console.log("--- No slicing");
//console.log(process.argv);

//console.log("\n--- slice(0)");
//args = parseArgs(process.argv.slice(0));
//console.dir(args);

//console.log("\n--- slice(1)");
//args = parseArgs(process.argv.slice(1));
//console.dir(args);

console.log("\n--- slice(2)");
var args = parseArgs(process.argv.slice(2), options);
console.dir(args);

var configFile = args.config_file;
console.log("config file: " + configFile);

