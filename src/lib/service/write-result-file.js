module.exports = ({ io }) => async playersPromise => {
    const players = await playersPromise;
    const now = new Date();
    const data = { timestamp: now.toISOString(), players };
    const json = JSON.stringify(data, null, 4);
    return io.fs.promises.writeFile(`${now.getTime()}.json`, json);
};
