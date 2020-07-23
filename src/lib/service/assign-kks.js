module.exports = ({ io }) => players => {

    const names = io.shuffle(players.map(p => p.name));
    return players.map((player, i) => ({ ...player, kk: names[i] }));

};
