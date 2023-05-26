const fs = require('fs');
const glob = require('fast-glob');
const shuffle = require('lodash/shuffle');
const { SNS } = require('@aws-sdk/client-sns');

module.exports = ({ constants }) => () => {

    return {
        fs,
        fsp: fs.promises,
        glob,
        sns: new SNS({ region: constants.awsRegion }),
        shuffle,
        getDate: () => new Date()
    };

};
