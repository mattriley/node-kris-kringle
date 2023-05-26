const defaultConfig = require('./default-config');
const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ config }) => {

    const { configure } = composer(modules);
    const { compose, constants } = configure(defaultConfig, config);

    const { io } = compose('io', { constants });
    const { lib } = compose('lib', { constants });
    const { effects } = compose('effects', { io, constants });
    compose('commands', { effects, lib, constants });

    return compose.end();

};
