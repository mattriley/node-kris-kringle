module.exports = ({ config }) => spend => players => {

    return players.map(player => {
        const message = config.template
            .replace('{name}', player.name)
            .replace('{kk}', player.kk)
            .replace('{spend}', spend);

        return { ...player, message };
    });

};
