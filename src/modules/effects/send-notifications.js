const { PublishCommand } = require('@aws-sdk/client-sns');

module.exports = ({ io, config }) => players => {

    const notify = async player => {
        try {
            if (config.dryRun) throw new Error('Not sending because dry run is enabled.');
            const command = new PublishCommand(player.smsRequest);
            await io.sns.send(command);
            return { sent: true };
        } catch (err) {
            return { sent: false, error: err.message };
        }
    };

    return Promise.all(players.map(async player => {
        const timestamp = io.getDate().toISOString();
        const result = await notify(player);
        const notification = { timestamp, ...result };
        return { ...player, notification };
    }));

};
