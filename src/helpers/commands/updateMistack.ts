export default {
    action: 'updateMistack',
    execute({ playersLocal, playersVisitor }: any, { setPlayersLocal, setPlayersVisitor }: any) {
        console.log('Mistack updated !')
        return new Promise(resolve => {
            setPlayersLocal(playersLocal)
            setPlayersVisitor(playersVisitor)
            resolve(true)
        })
    },
}
