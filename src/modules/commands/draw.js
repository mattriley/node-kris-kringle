const flow = require('lodash/flow');

module.exports = ({ effects, lib, constants }) => async () => {

    const { players, spend } = constants;
    const log = await effects.readOutputFiles();
    const previousAssignments = lib.getPreviousAssignments(log);

    const predicate = players => {
        return players.every(p => {
            if (p.name === p.kk) return false;
            return !previousAssignments[p.name]?.has(p.kk);
        });
    };

    return flow(
        lib.until(predicate, effects.assignKks),
        lib.assignSmsMessages(spend),
        lib.assignSmsRequests,
        effects.sendNotifications,
        effects.writeResultFile
    )(players);

};
