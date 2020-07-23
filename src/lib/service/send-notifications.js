module.exports = ({ io, config }) => players => {

    const notify = async player => {
        try {
            if (!config.dryRun) await io.sns.publish(player.smsRequest).promise();
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
