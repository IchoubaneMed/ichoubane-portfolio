import "./Navbar.css";
import logo from "../../images/logo.png";
import { GoThreeBars } from "react-icons/go";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";

function Navbar() {

    const [clicked, setCliced] = useState(false);

    const handleClick = () => {
        clicked ? setCliced(false) : setCliced(true);
    }

    return (
        <nav>
            <div>
                <img src={logo} alt="logo"  />
            </div>
            <div className="name">
                <h1>Mohamed Ichoubane</h1>
            </div>

            <div>
                <ul id="navbar" className={clicked ? "#navbar showed" : "#navbar"}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
                {!clicked ? <GoThreeBars /> : <FaTimesCircle />}
            </div>
        </nav>
    );
}

export default Navbar;