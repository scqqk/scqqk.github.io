import Link from "next/link"
export default function Navbar(){
    return(
        <div className="navbar">
            <header>
                <div className="test">
                    <nav>
                        <ul className="nav_links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="https://github.com/scqqk">Portfolio</Link></li>
                            <li><Link href="mailto:koraygench@gmail.com">Contact</Link></li>
                        </ul>
                    </nav> 
                </div>
            </header>
        </div>
    )
}