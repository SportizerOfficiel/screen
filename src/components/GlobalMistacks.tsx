import React, { useEffect, useState } from 'react'

interface Props {
    players: any[]
}

export const GlobalMistacks: React.FC<Props> = ({ players }) => {
    const [totalMistacks, setTotalMistacks] = useState(0)

    useEffect(() => {
        let total = 0
        players?.map((player: any) =>
            player?.mistacks?.map((mistack: any) => {
                total += 1
            }),
        )

        setTotalMistacks(total)
    }, [players])

    return (
        <div className="flex p-6 text-5xl text-white font-bold">
            <span className="mx-2">{totalMistacks}</span>
        </div>
    )
}

export default GlobalMistacks
