import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
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

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
