const compose = require('module-composer');
const lib = require('./lib');

module.exports = () => {

    const io = lib.io();
    const service = compose(lib.service, { io });
    const commands = compose(lib.commands, { service });
    
    return { service, commands };

};
