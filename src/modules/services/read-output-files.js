const glob = require('fast-glob');

module.exports = ({ io, config }) => async () => {

    const files = await glob(`${config.outputDir}/*.json`);
    return files.map(f => JSON.parse(io.fs.readFileSync(f)));

};
