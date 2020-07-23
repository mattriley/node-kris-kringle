const AWS = require('aws-sdk');
const sns = new AWS.SNS({ region: 'ap-southeast-2' });
const fs = require('fs');

const initialise = require('../src/initialise');
const { commands } = initialise({ fs, sns });

const dataFile = process.argv[2];
const data = JSON.parse(fs.readFileSync(dataFile));
commands.play(data);
