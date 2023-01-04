import { socket } from '../../services/websocket'

export default {
    action: 'connect',
    execute() {
        return new Promise(resolve => {
            console.log('Attempt to register the screen device...')
            socket.emit(
                'sportizer',
                {
                    action: 'connect',
                    data: { customName: 'Screen' },
                },
                (res: any) => {
                    resolve(res)
                },
            )
        })
    },
}
