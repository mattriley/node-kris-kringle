module.exports = () => (players, spend) => {
    return players.map(player => {
        const message = `Hey ${player.name}! Your KK is ${player.kk}. The spend is $${spend}. Merry Christmas! 🎅🏻🎄`;
        return { ...player, message };
    });
};
