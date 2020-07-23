const fs = require('fs');
const AWS = require('aws-sdk');

module.exports = () => {

    return { 
        fs, 
        sns: new AWS.SNS({ region: 'ap-southeast-2' }),
        getDate: () => new Date()
    };

};