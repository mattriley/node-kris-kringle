const shuffle = require('lodash/shuffle');

module.exports = () => players => {

    const names = shuffle(players.map(p => p.name));
    return players.map((player, i) => ({ ...player, kk: names[i] }));

};
