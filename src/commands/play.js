const flow = require('lodash/flow');

module.exports = ({ service }) => async ({ players, spend }) => {

    const eachFileData = await service.readOutputFiles();

    const previousAssignments = eachFileData.reduce((acc, data) => {
        data.players.forEach(player => {
            if (!acc[player.name]) acc[player.name] = new Set();
            acc[player.name].add(player.kk);
        });
        return acc;
    }, {});

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
