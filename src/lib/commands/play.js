const flow = require('lodash/flow');

module.exports = ({ service }) => ({ players, spend }) => {

    return flow(
        service.until(() => true, service.assignEachKk),
        service.assignEachSmsMessage(spend),
        service.assignEachSmsRequest,
        service.notifyEachPlayer,
        service.writeResultFile
    )(players);
    
};
