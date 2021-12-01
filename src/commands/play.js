const flow = require('lodash/flow');
const glob = require('fast-glob');

module.exports = ({ service, io, config }) => async ({ players, spend }) => {

    const files = await glob(`${config.outputDir}/*.json`);
    const eachFileData = files.map(f => JSON.parse(io.fs.readFileSync(f)));

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
