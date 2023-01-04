import React, { useContext } from 'react'

import SportizerContext from '../contexts/SportizerContext'

export const Timer: React.FC = () => {
    const { time } = useContext(SportizerContext)

    let secondCounter = (time % 60).toFixed(0)
    let minuteCounter = Math.floor(time / 60)
    let computedSecond
    let computedMinute

    if (time > 60) {
        //secondes à un chiffre = rajouter 0 avant
        computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter

        // minutes à 1 chiffre = rajouter 0 avant
        computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter
    } else {
        // un 0 après la virgule
        secondCounter = (time % 60).toFixed(1)

        //secondes à 2 chiffres = pas de 0 avant
        computedSecond = String(secondCounter).length === 2 ? `${secondCounter}` : secondCounter

        // minutes à 1 chiffre = rajouter 0 avant
        computedMinute = String(minuteCounter).length === 1 ? `` : minuteCounter
    }
    return (
        <div className="flex p-6 text-8xl text-white font-bold">
            <span className="mx-2">{computedMinute}</span>
            <span className="mx-2">{time > 60 && ':'}</span>
            <span className="mx-2">{computedSecond}</span>
        </div>
    )
}

export default Timer
