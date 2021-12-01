const path = require('path');

module.exports = ({ io, config }) => async p => {

    const players = await p;
    const now = io.getDate();
    const data = { timestamp: now.toISOString(), players };
    const json = JSON.stringify(data, null, 4);
    const outputFile = path.join(config.outputDir, `${now.getTime()}.json`);
    await io.fs.promises.mkdir(config.outputDir, { recursive: true });
    await io.fs.promises.writeFile(outputFile, json);

};
