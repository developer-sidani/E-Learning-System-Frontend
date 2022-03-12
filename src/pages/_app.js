import '../styles/globals.css'
import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import loadStore from '../store'
import { AuthRouter } from '../routes'

const { store, persistor } = loadStore()

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    (
        <Provider store={store}>
            <PersistGate loading={<p>loading</p>} persistor={persistor}>
                <AuthRouter>
                    {getLayout(
                        <Component {...pageProps} />,
                    )}
                </AuthRouter>
            </PersistGate>
        </Provider>
    ))
}

export default MyApp
