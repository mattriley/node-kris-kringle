const wire = require('@mattriley/node-wire');
const src = require('./src');

module.exports = ({ fs, sns }) => {
    const lib = wire(src.lib, { fs, sns });
    const commands = wire(src.commands, { lib });
    return commands;
};
