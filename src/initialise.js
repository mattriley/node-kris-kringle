const compose = require('module-composer');
const lib = require('./lib');
const config = require('./config');

module.exports = () => {

    const io = lib.io({ config });
    const service = compose(lib.service, { io, config });
    const commands = compose(lib.commands, { service });
    
    return { commands, service, io };

};
