const composer = require('module-composer');
const { config, ...src } = require('./src');
const compose = composer(src);

module.exports = () => {

    const io = src.io({ config });
    const service = compose('service', { io, config });
    const commands = compose('commands', { service });

    return { commands };

};
