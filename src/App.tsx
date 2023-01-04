import React, { useContext } from 'react'

import SportizerContext from './contexts/SportizerContext'

import Connexion from './pages/Connexion'
import BasketScreen from './pages/BasketScreen'

const App = () => {
    const { isAuth, isStart } = useContext(SportizerContext)

    if (isAuth && isStart) {
        return <BasketScreen />
    } else {
        return <Connexion />
    }
}

export default App
