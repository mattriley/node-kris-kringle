module.exports = ({ io }) => async p => {

    const players = await p;
    const now = io.getDate();
    const data = { timestamp: now.toISOString(), players };
    const json = JSON.stringify(data, null, 4);
    return io.fs.promises.writeFile(`${now.getTime()}.json`, json);

};
