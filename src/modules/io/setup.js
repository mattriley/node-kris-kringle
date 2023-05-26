const fs = require('fs');
const glob = require('fast-glob');
const AWS = require('aws-sdk');
const shuffle = require('lodash/shuffle');

module.exports = ({ constants }) => () => {

    return {
        fs,
        fsp: fs.promises,
        glob,
        sns: new AWS.SNS({ region: constants.awsRegion }),
        shuffle,
        getDate: () => new Date()
    };

};
