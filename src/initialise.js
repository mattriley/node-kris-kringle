const compose = require('module-composer');
const lib = require('./lib');
const src = {
    io: require('./io')
};

module.exports = () => {
    const io = src.io();
    const service = compose(lib.service, { io });
    const commands = compose(lib.commands, { service });
    return { service, commands };
};
