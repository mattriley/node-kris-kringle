const flow = require('lodash/flow');

module.exports = ({ service }) => ({ players, spend }) => {

    return flow(
        service.until(() => true, service.assignKks),
        service.assignSmsMessages(spend),
        service.assignSmsRequests,
        service.sendNotifications,
        service.writeResultFile
    )(players);
    
};
