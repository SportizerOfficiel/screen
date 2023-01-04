export default {
    action: 'updatePlayersList',
    execute({ players, side }: any, { setPlayersLocal, setPlayersVisitor }: any) {
        console.log('PlayersList updated !')
        return new Promise(resolve => {
            if (side === 'local') {
                setPlayersLocal(players)
            } else {
                setPlayersVisitor(players)
            }
            resolve({ side, success: true })
        })
    },
}
