export default {
    action: 'cancelPairing',
    execute(
        data: any,
        {
            setIsAuth,
            setIsStart,
            setClubLocal,
            setClubVisitor,
            setPlayersLocal,
            setPlayersVisitor,
        }: any,
    ) {
        console.log('Cancel pairing')
        return new Promise(resolve => {
            setIsAuth(false)
            setIsStart(false)
            setClubLocal([])
            setClubVisitor([])
            setPlayersLocal([])
            setPlayersVisitor([])
            resolve(true)
        })
    },
}
