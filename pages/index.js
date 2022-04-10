import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>xtrm.me · landing</title>
        <link rel="icon" href="/favicon.ico" />

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        // regular metadata
        <meta name="title" content="xtrm's website" />
        <meta name="description" content="xtrm's personal website / portfolio" />
        <meta name="keywords" content="xtrm,minecraft,kotlin,developer,jvm" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="xtrm" />

        // opengraph
        <meta property="og:title" content="xtrm's website" />
        <meta property="og:site_name" content="xtrm.me" />
        <meta property="og:url" content="https://xtrm.me" />
        <meta property="og:description" content="xtrm's personal website / portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Site Title" />
        <meta property="og:image" content="https://xtrm.me/assets/img/logo.png" />
        <meta name="theme-color" content="#FFFFFF" />

        // le twitter
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@xtrmdev" />
        <meta property="twitter:description" content="xtrm's personal website / portfolio" />
        <meta property="twitter:title" content="xtrm's website" />
        <meta property="twitter:image" content="https://xtrm.me/assets/img/logo.png" />
      </Head>

      <NavBar />

      <main>
        
      </main>

      <Footer />
    </>
  )
}
