const composer = require('module-composer');
const modules = require('./modules');
const defaultConfig = require('./default-config');

module.exports = ({ configs }) => {

    const { compose, config } = composer(modules, { defaultConfig, configs });
    const { io } = compose('io', { config });
    const { lib } = compose('lib', { config });
    const { effects } = compose('effects', { io, config });
    compose('commands', { effects, lib, config });
    return compose.end();

};
