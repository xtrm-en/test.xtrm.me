import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap justify-around items-center mx-auto">
                <div className="items-center hidden space-x-16 lg:flex">
                    <Link href="/index">
                        <a className="hover:text-purple-300 hover:underline" title="the landing page">home</a>
                    </Link>
                    <Link href="/about">
                        <a className="hover:text-purple-300 hover:underline" title="cool info">about me</a>
                    </Link>
                    <Link href="/portfolio">
                        <a className="hover:text-purple-300 hover:underline" title="some of my work">portfolio</a>
                    </Link>
                    <Link href="/blog">
                        <a className="hover:text-purple-300 hover:underline" title="articles about random topics">blog</a>
                    </Link>
                    <Link href="/contact">
                        <a className="hover:text-purple-300 hover:underline" title="my socials, pgp, & email">contact me</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}