module.exports = ({ io }) => async players => {

    const notify = async player => {
        try {
            // await io.sns.publish(player.smsRequest).promise();
            return { sent: true };
        } catch (err) {
            console.warn(err);
            return { sent: false, error: err.message };
        }
    };

    return Promise.all(players.map(async player => {
        const timestamp = new Date().toISOString();
        const result = await notify(player);
        const notification = { timestamp, ...result };
        return { ...player, notification };
    }));
    
};
