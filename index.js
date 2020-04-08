const { init } = require('@mattriley/module-initialiser');
const src = require('./src');

module.exports = ({ fs, sns }) => {
    const lib = init(src.lib, { fs, sns });
    const commands = init(src.commands, { lib });
    return commands;
};
