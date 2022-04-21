module.exports = {

    template: 'Hey {name}! Your KK is {kk}. The spend is ${spend}. Merry Christmas! 🎅🏻🎄',
    dryRun: true,
    awsRegion: 'ap-southeast-2',
    smsType: 'Promotional', // 'Transactional'
    smsSenderId: 'KrisKringle',
    outputDir: 'output'

};
