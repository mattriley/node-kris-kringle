const sender = 'KrisKringle';

module.exports = players => {
    return players.map(player => {
        const smsRequest = {
            Message: player.message,
            MessageAttributes: {
                'AWS.SNS.SMS.SMSType': {
                    DataType: 'String',
                    StringValue: 'Promotional' // 'Transactional'
                },
                'AWS.SNS.SMS.SenderID': {
                    DataType: 'String',
                    StringValue: sender
                }
            },
            PhoneNumber: player.number
        };
        return { ...player, smsRequest };
    });
};
