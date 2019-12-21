module.exports = ({ lib }) => async ({ players, predicate, spend }) => {
    const assignKks = predicate ? lib.assignEachKkUntil(predicate) : lib.assignEachKk;
    const playersWithKks = assignKks(players);
    const playersWithSmsMessages = lib.assignEachSmsMessage(playersWithKks, spend);
    const playersWithSmsRequests = lib.assignEachSmsRequest(playersWithSmsMessages);
    const playersWithNotificationResults = await lib.notifyEachPlayer(playersWithSmsRequests);
    return lib.writeResultFile(playersWithNotificationResults);
};
