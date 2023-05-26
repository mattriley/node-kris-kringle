const defaultConfig = require('./default-config');
const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ config }) => {

    const { configure } = composer(modules);
    const { compose } = configure(defaultConfig, config);

    const { io } = compose('io');
    const { lib } = compose('lib');
    const { effects } = compose('effects', { io });
    compose('commands', { effects, lib });

    return compose.end();

};
