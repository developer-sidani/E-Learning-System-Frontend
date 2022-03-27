import '../styles/globals.css'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// eslint-disable-next-line import/no-unresolved
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import loadStore from '../store'
import { AuthRouter } from '../routes'
import { SplashScreen } from '../screens' // You can also use <link> for styles

const { store, persistor } = loadStore()

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    (
        <Provider store={store}>
            <PersistGate loading={<SplashScreen />} persistor={persistor}>
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
