const compose = require('module-composer');
const lib = require('./lib');

module.exports = ({ fs, sns }) => {
    const service = compose(lib.service, { fs, sns });
    const commands = compose(lib.commands, { service });
    return { service, commands };
};
