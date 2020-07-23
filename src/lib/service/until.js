module.exports = () => (predicate, func) => (...args) => {

    const run = () => {
        const result = func(...args);
        return predicate(result) ? result : run();
    };

    return run();

};