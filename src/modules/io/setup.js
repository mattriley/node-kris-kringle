const fs = require('fs');
const glob = require('fast-glob');
const AWS = require('aws-sdk');
const shuffle = require('lodash/shuffle');

module.exports = ({ config }) => () => {

    return {
        fs,
        fsp: fs.promises,
        glob,
        sns: new AWS.SNS({ region: config.awsRegion }),
        shuffle,
        getDate: () => new Date()
    };

};
