module.exports = ({ lib }) => predicate => players => {
    const assign = () => {
        const playersWithKks = lib.assignEachKk(players);
        return predicate(playersWithKks) ? playersWithKks : assign();
    };
    return assign();
};
