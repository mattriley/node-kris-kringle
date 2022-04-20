const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ config }) => {

    const compose = composer(modules);
    const { io } = compose('io', { config });
    const { service } = compose('service', { io, config });
    return compose('commands', { service, io, config });

};
