module.exports = () => async log => {

    return log.reduce((acc, data) => {
        data.players.forEach(player => {
            if (!acc[player.name]) acc[player.name] = new Set();
            acc[player.name].add(player.kk);
        });
        return acc;
    }, {});

};
