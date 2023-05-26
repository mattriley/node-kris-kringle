const path = require('path');

module.exports = ({ io, constants }) => async p => {

    const players = await p;
    const now = io.getDate();
    const data = { timestamp: now.toISOString(), constants, players };
    const json = JSON.stringify(data, null, 4);
    const outputFile = path.join(constants.outputDir, `${now.getTime()}.json`);
    await io.fsp.mkdir(constants.outputDir, { recursive: true });
    await io.fsp.writeFile(outputFile, json);

};
