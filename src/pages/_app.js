import '../styles/globals.css'
import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import loadStore from '../store'

const { store, persistor } = loadStore()

const MyApp = ({ Component, pageProps }) => (
    <Provider store={store}>
        <PersistGate loading={<p>loading</p>} persistor={persistor}>
            <Component {...pageProps} />
        </PersistGate>
    </Provider>
)

export default MyApp
