import React from 'react'

interface Props {
    localName: string
    visitorName: string
}

const Header: React.FC<Props> = ({ localName, visitorName }) => {
    return (
        <div className="flex justify-between mb-5 items-center">
            <div className="flex-1 flex items-center bg-white">
                <div className="flex p-4 bg-blue-700">LOGO</div>
                <div className="p-4 text-blue-700 font-bold">{localName}</div>
            </div>
            <div className="mx-5 font-bold text-4xl text-primary-color">vs</div>
            <div className="flex-1 flex flex-row-reverse items-center bg-white">
                <div className="flex p-4 bg-green-700">LOGO</div>
                <div className="p-4 text-green-700 font-bold">{visitorName}</div>
            </div>
        </div>
    )
}

export default Header
