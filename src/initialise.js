const composer = require('module-composer');
const lib = require('./lib');
const compose = composer(lib);

module.exports = () => {

    const config = lib.config();
    const io = lib.io({ config });
    const service = compose('service', { io, config });
    const commands = compose('commands', { service });

    return { commands };

};
