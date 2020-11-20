import Link from 'next/link'
function Header() {
    return (
        <>
            <nav className='headerNav'>
                <ul>
                    <li>
                        <Link href='/'>
                            <a><abbr title='Home Page shows up the main breeds'>Home</abbr></a>
                        </Link>
                    </li>
                        <li>
                    <Link href='/subBreed'>

                        <a><abbr title='Page shows up the sub breeds'>Sub Breeds</abbr></a>
                    </Link>
                        </li>
                        <li>
                    <Link href='/randImage'>

                        <a><abbr title='Page shows up random Image'>Random image</abbr></a>
                    </Link>
                        </li>

                </ul>
            </nav>
        </>
    )
}

export default Header;