module.exports = ({ config }) => players => {

    return players.map(player => {
        const smsRequest = {
            Message: player.message,
            MessageAttributes: {
                'AWS.SNS.SMS.SMSType': {
                    DataType: 'String',
                    StringValue: config.smsType
                },
                'AWS.SNS.SMS.SenderID': {
                    DataType: 'String',
                    StringValue: config.smsSenderId
                }
            },
            PhoneNumber: player.number
        };

        return { ...player, smsRequest };
    });

};
