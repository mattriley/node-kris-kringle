const fs = require('fs');
const initialise = require('../src/initialise');
const { commands } = initialise();

const dataFile = process.argv[2];
const data = JSON.parse(fs.readFileSync(dataFile));
commands.play(data);
