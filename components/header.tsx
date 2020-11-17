import Link from 'next/link'
function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>

                    <li>About</li>

                </ul>
            </nav>
        </>
    )
}

export default Header;