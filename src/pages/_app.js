import Head from 'next/head'
import Script from 'next/script'

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
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-X233100GTE"></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X233100GTE');
        `,
        }}
      />
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
