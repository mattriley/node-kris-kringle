module.exports = ({ lib }) => predicate => players => {
    const assign = () => {
        const playersWithKks = lib.assignEachKk(players);
        return predicate(playersWithKks) ? playersWithKks : assign();
    };
    return assign();
};

// predicate allows a condition to be set which much be true otherwise will continue to assign. 
// this is useful to prevent certain assignments for some reason.