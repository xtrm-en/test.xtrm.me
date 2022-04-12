import Head from "next/head";
import LandingIntro from "../components/index/LandingIntro";
import NavBar from "../components/NavBar";

export default function Page() {
    return (
        <>
            <Head>
                <meta name="title" content="xtrm's website" />
                <meta name="description" content="xtrm's personal website / portfolio" />
                <meta name="keywords" content="xtrm,minecraft,kotlin,developer,jvm" />

                <meta property="og:url" content="https://xtrm.me" />
                <meta property="og:description" content="xtrm's personal website / portfolio" />
                <meta property="og:image" content="https://xtrm.me/assets/img/logo.png" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="400" />

                <meta property="twitter:title" content="xtrm's website" />
                <meta property="twitter:description" content="xtrm's personal website / portfolio" />
                <meta property="twitter:image" content="https://xtrm.me/assets/img/logo.png" />
            </Head>

            <NavBar baseDelay={2500}/>

            <LandingIntro/>
        </>
    )
}