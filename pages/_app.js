import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>xtrm.me · home</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://xtrm.me/" />

        {/** regular metadata */}
        <meta name="title" content="xtrm's website" />
        <meta name="description" content="xtrm's personal website / portfolio" />
        <meta name="keywords" content="xtrm,minecraft,kotlin,developer,jvm" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="xtrm" />

        {/** opengraph */}
        <meta property="og:title" content="xtrm's website" />
        <meta property="og:site_name" content="xtrm.me" />
        <meta property="og:url" content="https://xtrm.me" />
        <meta property="og:description" content="xtrm's personal website / portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://xtrm.me/assets/img/logo.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta name="theme-color" content="#060606" />

        {/** le twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@xtrmdev" />
        <meta property="twitter:description" content="xtrm's personal website / portfolio" />
        <meta property="twitter:title" content="xtrm's website" />
        <meta property="twitter:image" content="https://xtrm.me/assets/img/logo.png" />
      </Head>

      <>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </>
    </>
  )
}

export default MyApp
