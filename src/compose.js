const defaultConfig = require('./default-config');
const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ config }) => {

    const { compose } = composer(modules, { defaultConfig, config });
    const { io } = compose('io');
    const { lib } = compose('lib');
    const { effects } = compose('effects', { io });
    return compose('commands', { effects, lib });

};
