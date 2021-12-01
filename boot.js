const composer = require('module-composer');
const src = require('./src');
const compose = composer(src);

module.exports = ({ config }) => {

    const io = src.io({ config });
    const service = compose('service', { io, config });
    const commands = compose('commands', { service });

    return { commands };

};
