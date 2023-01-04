import React, { useContext } from 'react'

import sportizer from '../assets/images/sportizer.svg'

import SportizerContext from '../contexts/SportizerContext'

const Connexion: React.FC = () => {
    const { pairingCode, isAuth } = useContext(SportizerContext)

    return (
        <div className="w-screen h-screen bg-secondary-color p-2 select-none">
            <div className="h-full flex flex-col items-center justify-center">
                <img src={sportizer} className="w-2/5 mb-40" />
                <div className="flex flex-col justify-center items-center">
                    <span
                        className={`text-primary-color ${
                            isAuth ? 'text-6xl animate-pulse text-center' : 'text-9xl'
                        } font-bold`}
                    >
                        {isAuth ? 'Préparation du match...' : pairingCode}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Connexion
