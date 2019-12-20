module.exports = ({ lib }) => async ({ players, predicate, spend }) => {
    const assignKks = predicate ? lib.assignKksUntil(predicate) : lib.assignKks;
    const playersWithKKs = assignKks(players);
    const playersWithSmsMessages = lib.assignSmsMessages(playersWithKKs, spend);
    const playersWithSmsRequests = lib.assignSmsRequests(playersWithSmsMessages);
    const results = await lib.notify(playersWithSmsRequests);
    return lib.writeKkFile(results);
};
