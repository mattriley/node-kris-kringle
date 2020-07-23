const flow = require('lodash/flow');

module.exports = ({ service }) => async ({ players, predicate, spend }) => {
    const assignKks = predicate ? service.assignEachKkUntil(predicate) : service.assignEachKk;
    
    return flow(
        assignKks,
        service.assignEachSmsMessage(spend),
        service.assignEachSmsRequest,
        service.notifyEachPlayer,
        service.writeResultFile
    )(players);
    
};
