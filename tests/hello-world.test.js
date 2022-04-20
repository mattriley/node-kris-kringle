module.exports = ({ compose, test }) => {

    test('returns only files with given id', async t => {
        const modules = compose();
        console.log(modules);
    });

};
