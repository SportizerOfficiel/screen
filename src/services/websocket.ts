import { io } from 'socket.io-client'

import commandsProvider from '../providers/commandsProvider'

export let socket: any

export const initiateSocketConnection = () => {
    socket = io(`http://localhost:8001`)
}

export const sportizerChannel = (context: any) => {
    socket.on('connect', () => {
        commandsProvider
            .get('connect')
            .execute()
            .then((res: any) => console.log(res))
            .catch((err: any) => console.log(err))
    })

    socket.on('sportizer', ({ action, data }: any) => {
        if (commandsProvider.has(action)) {
            commandsProvider
                .get(action)
                .execute(data, context)
                .then((res: any) => console.log(res))
                .catch((err: any) => console.log(err))
        } else {
            console.log('Unknow command')
        }
    })
}

export const disconnectSocket = () => {
    if (socket) socket.disconnect()
}
