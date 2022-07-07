import Head from 'next/head'

import { AppContext } from '@context/AppContext'
import { useInitialState } from '@hooks/useInitialState'

// components
import { Header } from '@components/Header'

// assets
import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <title>Next Shop</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
