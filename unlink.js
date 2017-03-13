/*
 example usage:

 > node unlink.js ./package.json
*/

const fs = require('fs');
const path = require('path');

const location = process.argv[process.argv.length - 1];

const toKeep = ['react-native', 'react'];

fs.readFile(location, {encoding: 'utf-8'}, function (err, data) {
  if (err) {
    throw new Error(err);
  }

  const unlinkCommands = ['cd ' + path.resolve(location, "..")];
  const uninstallCommands = ['cd ' + path.resolve(location, "..")];

  const json = JSON.parse(data);
  for(let name in json.dependencies) {
    if(toKeep.indexOf(name) >= 0) {
      continue;
    }
    unlinkCommands.push('react-native unlink ' + name);
    uninstallCommands.push('npm uninstall ' + name);
  }

  {
    const outputfile = "unlink-packages.sh";
    fs.writeFile(outputfile, unlinkCommands.join("\n"), function(err) {
      if (err) {
        throw new Error(err);
      }

      console.log("run: sh " + outputfile + " && rm " + outputfile);
    })
  }

  {
    const outputfile = "uninstall-packages.sh";
    fs.writeFile(outputfile, uninstallCommands.join("\n"), function(err) {
      if (err) {
        throw new Error(err);
      }
    })
  }
});
