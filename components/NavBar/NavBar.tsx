import Link from 'next/link'
import { useState } from 'react'
import useWindowDimensions from '../../lib/useWindowDimensions';

import dynamic from 'next/dynamic'
const Anime = dynamic(() => import('react-anime'), { ssr: false })

interface NavBarProps {
    baseDelay?: number;
}

export default function NavBar(props: NavBarProps) {
    const { width } = useWindowDimensions();

    const [droppedDown, setDroppedDown] = useState(false);

    const isDropdown = width < 640;
    const shouldDisplay = !isDropdown || droppedDown;

    const startDelay = 0;
    const delayInc = 50;
    let delay = (isDropdown ? 0 : (props.baseDelay || 0)) + startDelay - delayInc;

    return (
        <div className="fixed w-screen bg-black">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sm:hidden">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <Anime easing={'easeOutElastic(1, .8)'} translateX={[-100, 0]} opacity={[0, 1]} delay={props.baseDelay}>
                            <button type="button" onClick={_ => setDroppedDown(!droppedDown)} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-900" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {droppedDown ?
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    :
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                }
                            </button>
                        </Anime>
                    </div>
                </div>
            </div>
            {shouldDisplay ?
                <div className="sm:container sm:px-4 sm:py-2 sm:flex sm:flex-wrap sm:justify-around sm:items-center sm:mx-auto">
                    <div className="px-2 pb-3 sm:p-0 sm:py-2 sm:m-0 sm:items-center sm:space-x-16 sm:flex">
                        <Anime easing={'easeOutElastic(1, .8)'} translateY={[-50, 0]} opacity={[0, 1]} delay={delay += delayInc}>
                            <Link href="/">
                                <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="the landing page">home</a>
                            </Link>
                        </Anime>
                        <Anime easing={'easeOutElastic(1, .8)'} translateY={[-50, 0]} opacity={[0, 1]} delay={delay += delayInc}>
                            <Link href="/about/">
                                <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="cool info">about me</a>
                            </Link>
                        </Anime>
                        <Anime easing={'easeOutElastic(1, .8)'} translateY={[-50, 0]} opacity={[0, 1]} delay={delay += delayInc}>
                            <Link href="/projects/">
                                <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="some of my work">projects</a>
                            </Link>
                        </Anime>
                        <Anime easing={'easeOutElastic(1, .8)'} translateY={[-50, 0]} opacity={[0, 1]} delay={delay += delayInc}>
                            <Link href="/posts/">
                                <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="articles about random topics">posts</a>
                            </Link>
                        </Anime>
                        <Anime easing={'easeOutElastic(1, .8)'} translateY={[-50, 0]} opacity={[0, 1]} delay={delay += delayInc}>
                            <Link href="/contact/">
                                <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="my socials, pgp, & email">contact me</a>
                            </Link>
                        </Anime>
                    </div>
                </div> : ""}
        </div>
    )
}