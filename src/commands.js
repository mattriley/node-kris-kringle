const commands = require('./commands/');
const lib = require('./lib/');

module.exports = ({ fs, sns }) => {
    const notify = lib.notify({ sns });
    const writeKkFile = lib.writeKkFile({ fs });
    const play = commands.play({
        lib: { ...lib, notify, writeKkFile }
    });
    return { play };
};
