const flow = require('lodash/flow');

module.exports = ({ service }) => async ({ players, spend }) => {

    const log = await service.readOutputFiles();
    const previousAssignments = service.getPreviousAssignments(log);

    const predicate = players => {
        return players.every(p => {
            if (p.name === p.kk) return false;
            return !previousAssignments[p.name]?.has(p.kk);
        });
    };

    return flow(
        service.until(predicate, service.assignKks),
        service.assignSmsMessages(spend),
        service.assignSmsRequests,
        service.sendNotifications,
        service.writeResultFile
    )(players);

};
