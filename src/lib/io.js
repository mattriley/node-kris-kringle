const fs = require('fs');
const AWS = require('aws-sdk');
const shuffle = require('lodash/shuffle');

module.exports = ({ config }) => {

    return { 
        fs, 
        sns: new AWS.SNS({ region: config.awsRegion }),
        shuffle,
        getDate: () => new Date()
    };

};