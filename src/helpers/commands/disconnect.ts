export default {
    action: 'disconnect',
    execute(socket: any, props: any) {
        console.log('disconnect')
        socket.on('disconnect', () => {
            props.setWsStatus(false)
            props.setRemoteStatus(false)
        })
    },
}
