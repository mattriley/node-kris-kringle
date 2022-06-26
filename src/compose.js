const composer = require('module-composer');
const modules = require('./modules');
const defaultConfig = require('./default-config');

module.exports = ({ configs }) => {

    const { compose, config } = composer(modules, defaultConfig, configs);
    const { io } = compose('io', { config }, io => io.setup());
    const { services } = compose('services', { io, config });
    compose('commands', { services, io, config });
    return compose.end();

};
