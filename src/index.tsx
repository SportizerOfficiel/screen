import React from 'react'
import ReactDOM from 'react-dom'

import { SportizerContextProvider } from './contexts/SportizerContext'

import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <SportizerContextProvider>
            <App />
        </SportizerContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)

if (import.meta.hot) {
    import.meta.hot.accept()
}
