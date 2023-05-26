module.exports = ({ io, constants }) => async () => {

    const files = await io.glob(`${constants.outputDir}/*.json`);
    return files.map(f => JSON.parse(io.fs.readFileSync(f)));

};
