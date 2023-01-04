export default {
    action: 'receiveTime',
    execute({ time }: any, { setTime }: any) {
        console.log('first')
        return new Promise(() => {
            setTime(time.time)
        })
    },
}
