export default {
    action: 'pairingCode',
    execute({ pairingCode }: any, { setPairingCode }: any) {
        return new Promise(resolve => {
            setPairingCode(pairingCode)
            resolve('Code receive success')
        })
    },
}
