const compose = require('module-composer');
const lib = require('./lib');

module.exports = () => {

    const config = lib.config();
    const io = lib.io({ config });
    const service = compose(lib.service, { io, config });
    const commands = compose(lib.commands, { service });
    
    return { commands };

};
