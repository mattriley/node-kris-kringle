const flow = require('lodash/flow');

module.exports = ({ services, config }) => async () => {

    const { players, spend } = config;
    const log = await services.readOutputFiles();
    const previousAssignments = services.getPreviousAssignments(log);

    const predicate = players => {
        return players.every(p => {
            if (p.name === p.kk) return false;
            return !previousAssignments[p.name]?.has(p.kk);
        });
    };

    return flow(
        services.until(predicate, services.assignKks),
        services.assignSmsMessages(spend),
        services.assignSmsRequests,
        services.sendNotifications,
        services.writeResultFile
    )(players);

};
