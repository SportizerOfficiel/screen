export default {
    action: 'updateScore',
    execute({ playersLocal, playersVisitor }: any, { setPlayersLocal, setPlayersVisitor }: any) {
        console.log('Score updated !')
        return new Promise(resolve => {
            setPlayersLocal(playersLocal)
            setPlayersVisitor(playersVisitor)
            resolve(true)
        })
    },
}
