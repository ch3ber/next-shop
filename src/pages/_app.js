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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Next Shop</title>
        <meta
          name="description"
          content="Shopping web page, this page is only to test Next.js and its functionalities"
        />

        <link rel="dns-prefetch" href="https://api.escuelajs.co/api/v1/products" />
        <link
          crossOrigin
          rel="preconnect"
          href="https://api.escuelajs.co/api/v1/products"
        />

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link crossOrigin rel="preconnect" href="https://www.googletagmanager.com" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
