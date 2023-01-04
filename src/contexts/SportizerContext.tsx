import propTypes from 'prop-types'
import React, { createContext, useEffect, useState } from 'react'

import { disconnectSocket, initiateSocketConnection, sportizerChannel } from '../services/websocket'

const SportizerContext = createContext<any>({
    isAuth: false,
    setIsAuth: () => {},
    isStart: false,
    setIsStart: () => {},
    pairingCode: '',
    setPairingCode: () => {},
    remoteStatus: false,
    setRemoteStatus: () => {},
    serverStatus: false,
    setServerStatus: () => {},
    clubLocal: [],
    setClubLocal: () => {},
    clubVisitor: [],
    setClubVisitor: () => {},
    playersLocal: [],
    setPlayersLocal: () => {},
    playersVisitor: [],
    setPlayersVisitor: () => {},
    time: [],
    setTime: () => {},
})

export const SportizerContextProvider = ({ children }: any) => {
    const [isAuth, setIsAuth] = useState(false)
    const [pairingCode, setPairingCode] = useState('')

    const [clubLocal, setClubLocal] = useState('')
    const [playersLocal, setPlayersLocal] = useState([])

    const [clubVisitor, setClubVisitor] = useState('')
    const [playersVisitor, setPlayersVisitor] = useState([])

    const [isStart, setIsStart] = useState(false)

    const [time, setTime] = useState(600)

    const context = {
        isAuth,
        setIsAuth,
        isStart,
        setIsStart,
        pairingCode,
        setPairingCode,
        clubLocal,
        setClubLocal,
        clubVisitor,
        setClubVisitor,
        playersLocal,
        setPlayersLocal,
        playersVisitor,
        setPlayersVisitor,
        time,
        setTime,
    }

    useEffect(() => {
        initiateSocketConnection()
        sportizerChannel(context)

        return () => {
            disconnectSocket()
        }
    }, [])

    return <SportizerContext.Provider value={context}>{children}</SportizerContext.Provider>
}

SportizerContextProvider.propTypes = {
    children: propTypes.any,
}

export default SportizerContext
