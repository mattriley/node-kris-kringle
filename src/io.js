const AWS = require('aws-sdk');
const fs = require('fs');

module.exports = () => {

    const sns = new AWS.SNS({ region: 'ap-southeast-2' });
    return { fs, sns };

};