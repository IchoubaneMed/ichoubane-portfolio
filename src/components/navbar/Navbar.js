import "./Navbar.css";
import logo from "../../images/logo.png";
import { GoThreeBars } from "react-icons/go";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

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
                    <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/about">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/skills">Skills</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/projects">Projects</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
                {!clicked ? <GoThreeBars /> : <FaTimesCircle />}
            </div>
        </nav>
    );
}

export default Navbar;