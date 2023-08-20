const fs = require('fs');
const glob = require('fast-glob');
const shuffle = require('lodash/shuffle');
const { SNSClient } = require('@aws-sdk/client-sns');

module.exports = ({ config }) => () => {

    return {
        fs,
        fsp: fs.promises,
        glob,
        sns: new SNSClient({ region: config.awsRegion }),
        shuffle,
        getDate: () => new Date()
    };

};
