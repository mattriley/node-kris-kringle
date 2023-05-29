module.exports = ({ io, config }) => async () => {

    const files = await io.glob(`${config.outputDir}/*.json`);
    return files.map(f => JSON.parse(io.fs.readFileSync(f)));

};
