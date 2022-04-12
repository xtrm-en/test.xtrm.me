import styled from "styled-components"

import dynamic from 'next/dynamic'
const Anime = dynamic(() => import('react-anime'), { ssr: false })

const IntroText = styled.div`
    font-size: 3rem;
`

export default function LandingIntro() {
    const delayGreeter = 500;
    const delayName = delayGreeter + 600;

    return (
        <>
            <div className="flex content-center w-screen h-screen cursor-default">
                <div className="m-auto flex-row content-center">
                    <Anime easing={'easeOutElastic(1, .8)'} translateY={[-50, 0]} opacity={[0, 1]} delay={delayGreeter}>
                        <IntroText className="font-extralight">
                            heya 👋.
                            <Anime easing={'easeOutElastic(1, .8)'} translateX={[-70, 0]} opacity={[0, 1]} delay={delayName} duration={1000}>
                                <span className="font-semibold">
                                    I&apos;m killian.
                                </span>
                            </Anime>
                        </IntroText>
                    </Anime>
                </div>
            </div>
        </>
    )
}