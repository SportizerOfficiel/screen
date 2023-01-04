import React from 'react'

interface Props {
    club: string
    players: any[]
    side: 'local' | 'visitor'
}

const TeamSide: React.FC<Props> = ({ club, players, side }) => {
    const getGlobalScore = (players: any) => {
        let score = 0
        players?.map((player: any) => player?.score?.map((points: number) => (score += points)))

        return score
    }

    const getPersonalScore = (player: any) => {
        let score = 0
        player?.score?.map((points: number) => (score += points))

        return score
    }

    const bulletGenerator = (player: any) => {
        let bullet: any[] = []
        player?.mistacks?.map((item: any, i: number) => {
            if (player?.mistacks?.length >= 5) {
                bullet.push(
                    <div
                        className="w-4 h-4 mr-2 bg-red-600 rounded-full"
                        key={player.id + i}
                    ></div>,
                )
            } else {
                bullet.push(
                    <div
                        className="w-4 h-4 mr-2 bg-primary-color rounded-full"
                        key={player.id + i}
                    ></div>,
                )
            }
        })

        return bullet
    }

    return (
        <div className="flex-1 flex flex-col items-center justify-between px-5">
            <div className="w-full flex flex-col items-center justify-between">
                {players?.slice(0, 5).map((player: any) => (
                    <div
                        className="w-full flex justify-between mb-14 text-white-color text-5xl"
                        key={player.id}
                    >
                        <div>
                            <span>5. {player.firstName}</span>
                            <div className="flex mt-2 w-full h-4">{bulletGenerator(player)}</div>
                        </div>
                        <div className="text-primary-color font-bold">
                            {getPersonalScore(player)}
                        </div>
                    </div>
                ))}
            </div>
            <div
                className={`${
                    side === 'local' ? 'text-blue-700' : 'text-green-700'
                } text-9xl font-bold borderText`}
            >
                {getGlobalScore(players)}
            </div>
        </div>
    )
}

export default TeamSide
