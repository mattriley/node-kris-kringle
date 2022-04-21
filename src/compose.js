const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ config }) => {

    const compose = composer(modules);
    const { io } = compose('io', { config }, io => io.setup());
    const { services } = compose('services', { io, config });
    return compose('commands', { services, io, config });

};
