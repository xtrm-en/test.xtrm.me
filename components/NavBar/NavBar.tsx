export default function NavBar() {
    return (
        <nav className="px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap justify-around items-center mx-auto">
                <div className="items-center hidden space-x-16 lg:flex">
                    <a href="/" className="hover:text-purple-300 hover:underline" title="the landing page">home</a>
                    <a href="#" className="hover:text-purple-300 hover:underline" title="cool info">about me</a>
                    <a href="#" className="hover:text-purple-300 hover:underline" title="some of my work">portfolio</a>
                    <a href="#" className="hover:text-purple-300 hover:underline" title="articles about random topics">blog</a>
                    <a href="#" className="hover:text-purple-300 hover:underline" title="my socials, pgp, & email">contact me</a>
                </div>
            </div>
        </nav>
    )
}