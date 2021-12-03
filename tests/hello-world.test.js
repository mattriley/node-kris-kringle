module.exports = ({ boot, test }) => {

    test('returns only files with given id', async t => {
        const modules = boot();
        console.log(modules);
    });

};
