export default {
    action: 'startMatch',
    execute(
        { local, visitor }: any,
        {
            setIsAuth,
            setIsStart,
            setClubLocal,
            setClubVisitor,
            setPlayersLocal,
            setPlayersVisitor,
        }: any,
    ) {
        console.log(local, visitor)
        return new Promise(resolve => {
            setIsAuth(true)
            setIsStart(true)
            setClubLocal(local.clubLocal)
            setClubVisitor(visitor.clubVisitor)
            setPlayersLocal(local.playersLocal)
            setPlayersVisitor(visitor.playersVisitor)
            resolve('Ready to play!')
        })
    },
}
