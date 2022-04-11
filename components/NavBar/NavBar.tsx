import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function NavBar() {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])

    const [open, setOpen] = useState(false);

    const shouldDisplay = screenSize.dynamicWidth > 640 || open

    return (
        <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sm:hidden">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <button type="button" onClick={_ => setOpen(!open)} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-900" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {shouldDisplay ? 
            <div className="sm:container sm:px-4 sm:py-2 sm:flex sm:flex-wrap sm:justify-around sm:items-center sm:mx-auto">
                <div className="px-2 pb-3 space-y-1 sm:p-0 sm:py-2 sm:m-0 sm:items-center sm:space-x-16 sm:flex">
                    <Link href="/">
                        <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="the landing page">home</a>
                    </Link>
                    <Link href="/about/">
                        <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="cool info">about me</a>
                    </Link>
                    <Link href="/portfolio/">
                        <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="some of my work">portfolio</a>
                    </Link>
                    <Link href="/blog/">
                        <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="articles about random topics">blog</a>
                    </Link>
                    <Link href="/contact/">
                        <a className="hover:text-purple-300 hover:underline block px-3 py-2 sm:flex sm:p-0" title="my socials, pgp, & email">contact me</a>
                    </Link>
                </div>
            </div> : ""}
        </>
    )
}