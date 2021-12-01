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

    // console.log(previousAssignments);

    return flow(
        service.until(() => true, service.assignKks),
        service.assignSmsMessages(spend),
        service.assignSmsRequests,
        service.sendNotifications,
        service.writeResultFile
    )(players);

};
