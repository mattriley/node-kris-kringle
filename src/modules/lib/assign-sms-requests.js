module.exports = ({ constants }) => players => {

    return players.map(player => {
        const smsRequest = {
            Message: player.message,
            MessageAttributes: {
                'AWS.SNS.SMS.SMSType': {
                    DataType: 'String',
                    StringValue: constants.smsType
                },
                'AWS.SNS.SMS.SenderID': {
                    DataType: 'String',
                    StringValue: constants.smsSenderId
                }
            },
            PhoneNumber: player.number
        };

        return { ...player, smsRequest };
    });

};
