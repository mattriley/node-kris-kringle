module.exports = ({ fs }) => data => {
    const json = JSON.stringify(data, null, 4);
    return fs.promises.writeFile('kk.json', json);
};
