export default {
    action: 'successPairing',
    execute(data: any, { setIsAuth }: any) {
        return new Promise(resolve => {
            setIsAuth(true)
            resolve('Pairing success !')
        })
    },
}
