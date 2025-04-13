const { argv } = require('node:process');
var figlet = require("figlet")

var userString = argv[2]
// print process.argv
console.log(userString)

figlet(userString, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });