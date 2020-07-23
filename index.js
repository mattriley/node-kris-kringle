const compose = require('module-composer');
const src = require('./src');

module.exports = ({ fs, sns }) => {
    const lib = compose(src.lib, { fs, sns });
    const commands = compose(src.commands, { lib });
    return commands;
};
