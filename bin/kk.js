const fs = require('fs');
const compose = require('../compose');
const defaultConfig = require('../default-config');

const paramsFile = process.argv[2];
const configFile = process.argv[3];
const params = JSON.parse(fs.readFileSync(paramsFile));
const userConfig = fs.existsSync(configFile) ? JSON.parse(fs.readFileSync(configFile)) : {};

const config = { ...defaultConfig, ...userConfig };
const { commands } = compose({ config });

commands.play(params);
