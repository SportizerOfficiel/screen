import React, { useContext } from 'react'

import Header from '../components/Header'
import TeamSide from '../components/TeamSide'
import QuarterTime from '../components/QuarterTime'
import GlobalMistacks from '../components/GlobalMistacks'

import Timer from '../components/Timer'

import SportizerContext from '../contexts/SportizerContext'

import '../assets/css/tips.css'

const ScreenPlayersList: React.FC = () => {
    const { clubLocal, playersLocal, clubVisitor, playersVisitor } = useContext(SportizerContext)

    return (
        <div className="h-screen flex flex-col bg-black-netflix text-white">
            <Header localName={clubLocal} visitorName={clubVisitor} />
            <div className="flex justify-between p-2 flex-1">
                <TeamSide club="Local" players={playersLocal} side="local" />
                <div className="flex flex-col justify-between">
                    <div className="flex-1 flex justify-center items-center">
                        <Timer />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end">
                        <QuarterTime />
                        <div className="flex items-center">
                            <GlobalMistacks players={playersLocal} />
                            <span className="text-3xl">FAUTES</span>
                            <GlobalMistacks players={playersVisitor} />
                        </div>
                    </div>
                </div>
                <TeamSide club="Visitor" players={playersVisitor} side="visitor" />
            </div>
        </div>
    )
}

export default ScreenPlayersList
