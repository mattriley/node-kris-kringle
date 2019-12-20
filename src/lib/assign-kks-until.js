const assignKKs = require('./assign-kks');

module.exports = predicate => players => {
    const assign = () => {
        const playersWithKKs = assignKKs(players);
        return predicate(playersWithKKs) ? playersWithKKs : assign();
    };
    return assign();
};
