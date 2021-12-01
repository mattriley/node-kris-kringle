const fs = require('fs');
const boot = require('../boot');
const { commands } = boot();

const dataFile = process.argv[2];
const data = JSON.parse(fs.readFileSync(dataFile));
commands.play(data);
