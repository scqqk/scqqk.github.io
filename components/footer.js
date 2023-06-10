import Link from "next/link";
import { FaGithub } from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="footer">
            <div>
                <p className="text">2023 Koray Genç</p>
                <br/>
                <Link className="text-bold" href="https://github.com/scqqk/Portfolio-Website-Repo"><FaGithub className="icon"/> Source</Link>
            </div>
        </div>
    )
}