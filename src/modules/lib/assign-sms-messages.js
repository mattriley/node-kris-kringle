module.exports = ({ constants }) => spend => players => {

    return players.map(player => {
        const message = constants.template
            .replace('{name}', player.name)
            .replace('{kk}', player.kk)
            .replace('{spend}', spend);

        return { ...player, message };
    });

};
