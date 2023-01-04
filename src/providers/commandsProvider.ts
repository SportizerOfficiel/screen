import connect from '../helpers/commands/connect'
import disconnect from '../helpers/commands/disconnect'
import pairingCode from '../helpers/commands/pairingCode'
import successPairing from '../helpers/commands/successPairing'
import receivePlayersList from '../helpers/commands/receivePlayersList'
import receiveTime from '../helpers/commands/receiveTime'
import startMatch from '../helpers/commands/startMatch'
import cancelPairing from '../helpers/commands/cancelPairing'
import updateScore from '../helpers/commands/updateScore'
import updateMistack from '../helpers/commands/updateMistack'
import updatePlayersList from '../helpers/commands/updatePlayersList'

const commandsProvider = new Map()

const register = {
    connect,
    disconnect,
    pairingCode,
    successPairing,
    receivePlayersList,
    receiveTime,
    startMatch,
    cancelPairing,
    updateScore,
    updateMistack,
    updatePlayersList,
}

const providers = Object.values(register)
for (const i in providers) {
    commandsProvider.set(providers[i].action, providers[i])
}

export default commandsProvider
