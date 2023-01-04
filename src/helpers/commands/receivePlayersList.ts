export default {
    action: 'receivePlayersList',
    execute(socket: any, props: any) {
        console.log('receivePlayersList')
        socket.on('screen', (data: any) => {
            data.list && props.setPLayersList(props.list)
        })
    },
}
