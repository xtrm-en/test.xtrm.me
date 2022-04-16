import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://xtrm.me/" />

        {/** regular metadata */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="xtrm" />

        {/** opengraph */}
        <meta property="og:title" content="xtrm's website" />
        <meta property="og:site_name" content="xtrm.me" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#060606" />

        {/** le twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@xtrmdev" />
      </Head>

      <>
        <Component {...pageProps} />
      </>
    </>
  )
}

export default MyApp
