// import logo from './logo.svg';
import "./Nav.css";
import Logo from "../../SVG/Logo.svg";
import Home from "../../SVG/Home.svg";
import Node from "../../SVG/Node.svg";
import Badge from "../../SVG/Badge.svg";
import Twitter from "../../SVG/Twitter.svg";
import Chart from "../../SVG/Chart.svg";
import Telegram from "../../SVG/Telegram.svg";
import { Link } from 'react-router-dom';


function Nav() {

  let url = "../Nodes/Nodes.js"
  return (

    
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo"></img>
      </div>

      <div className="nav-content">
        <ul>
          <li>
            <img src={Home} alt="home"></img>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <img src={Node} alt="home"></img>
            <Link to="/nodes">Nodes</Link>
          </li>
          <li>
            <img src={Badge} alt="home"></img>
            <Link to="/mynodes">My Nodes</Link>
          </li>
        </ul>

        <div className="socials">
          <ul>
            <li>
              <img src={Twitter} alt="home"></img>
              <a href="https://twitter.com/KoruCompiler" target="_blank">Follow Us!</a>
            </li>
            <li>
              <img src={Telegram} alt="home"></img>
              <a href="https://t.me/KoruCompiler" target="_blank">Join Telegram</a>
            </li>
            <li>
              <img src={Chart} alt="home"></img>
              <a href="https://www.dextools.io/app/en/arbitrum" target="_blank">$KORU Chart</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
