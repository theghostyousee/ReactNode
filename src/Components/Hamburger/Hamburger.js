import "./Hamburger.css";
import { FaBars, FaTimes } from "react-icons/fa";
import {useRef} from "react";
import Telegram from "../../SVG/Telegram.svg";
import Logo from "../../SVG/Logo.svg";
import Chart from "../../SVG/Chart.svg";
import Twitter from "../../SVG/Twitter.svg";
import { Link } from 'react-router-dom';


function Hamburger() {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  
     return (
        <header>
            
            
            <nav ref={navRef}>
                <div className="logo">
                    <img src={Logo} alt="Logo"></img>
                </div>
                <Link to="/">Dashboard</Link>
                <Link to="/nodes">Nodes</Link>
                <Link to="/mynodes">My Nodes</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>

                    <FaTimes/>

                </button>
                <div className="mobile-tag">
                    <ul>
                        <li>
                            <img src={Twitter} alt="home"></img>
                            <a href="App.js">Twitter</a>
                        </li>
                        <li>
                            <img src={Telegram} alt="home"></img>
                            <a href="App.js">Telegram</a>
                        </li>
                        <li>
                            <img src={Chart} alt="home"></img>
                            <a href="App.js">$GHOST</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <button  className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Hamburger;
