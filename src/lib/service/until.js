module.exports = () => (predicate, func) => {

    const run = () => {
        const result = func();
        return predicate(result) ? result : run();
    };

    return run();

};