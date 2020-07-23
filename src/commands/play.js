const flow = require('lodash/flow');

module.exports = ({ lib }) => async ({ players, predicate, spend }) => {
    const assignKks = predicate ? lib.assignEachKkUntil(predicate) : lib.assignEachKk;
    
    return flow(
        assignKks,
        lib.assignEachSmsMessage(spend),
        lib.assignEachSmsRequest,
        lib.notifyEachPlayer,
        lib.writeResultFile
    )(players);
    
};
