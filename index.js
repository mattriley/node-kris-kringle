const minit = require('@mattriley/minit');
const src = require('./src');

module.exports = ({ fs, sns }) => {
    const lib = minit(src.lib, { fs, sns });
    const commands = minit(src.commands, { lib });
    return commands;
};
