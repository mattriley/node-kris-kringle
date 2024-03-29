const fs = require('fs');
const process = require('process');
const compose = require('../src/compose');

const [configFile = 'config.json'] = process.argv.slice(2);
const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
const { commands } = compose({ config });
commands.draw();
