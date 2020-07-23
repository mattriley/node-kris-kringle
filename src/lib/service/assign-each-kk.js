const { shuffle } = require('lodash');

module.exports = () => players => {
    const shuffledNames = shuffle(players.map(p => p.name));
    return players.map((player, i) => ({ ...player, kk: shuffledNames[i] }));
};
