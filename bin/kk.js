const fs = require('fs');
const boot = require('../boot');
const defaultConfig = require('../default-config');

const dataFile = process.argv[2];
const configFile = process.argv[3];
const data = JSON.parse(fs.readFileSync(dataFile));
const userConfig = fs.existsSync(configFile) ? JSON.parse(fs.readFileSync(configFile)) : {};

const config = { ...defaultConfig, ...userConfig };
const { commands } = boot({ config });

commands.play(data);
