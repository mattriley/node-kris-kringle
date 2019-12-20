const { shuffle } = require('lodash');

module.exports = players => {
    const playerNames = players.map(p => p.name);
    const theDraw = shuffle(playerNames);
    return players.map((player, i) => {
        const kkIndex = i === theDraw.length - 1 ? 0 : i + 1;
        return { ...player, kk: theDraw[kkIndex] };
    });
};
