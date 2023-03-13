import "./Dashboard.css";
import "../NavBar/Nav.css";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import Price from "../../SVG/Price.svg";
import Chart from "../../SVG/Chart.svg";
import Info from "../../SVG/Info.svg";
import Total from "../../SVG/Total.svg";
import Scale from "../../SVG/Scale.svg";
import Rank from "../../SVG/Rank.svg";
import Reload from "../../SVG/Reload.svg";
import Award from "../../SVG/Awards.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Dashboard() {

  return (
    <div className="Main">
      <div className="Wrap">
        <div className="head">
          <ConnectButton/>
        </div>
        

        <div className="stats">
          <div className="stats-title">
            <h1>Protocol Stats</h1>
          </div>


          <div className="wrap-cards">
            <div className="card">
              <div className="card-title">
                <img src={Price} alt="Price"></img>
                <h4>$KORU Price</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <img src={Chart} alt="Price"></img>
                <h4>Market Cap</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <img src={Info} alt="Price"></img>
                <h4>Total Supply</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <img src={Total} alt="Price"></img>
                <h4>Total Nodes</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stats-title">
            <h1>User Stats</h1>
          </div>

          <div className="wrap-cards">
            <div className="card">
              <div className="card-title">
                <img src={Rank} alt="Price"></img>
                <h4>My Nodes</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <img src={Scale} alt="Price"></img>
                <h4>My $KORU Balance</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <img src={Award} alt="Price"></img>
                <h4>Daily Rewards</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <img src={Reload} alt="Price"></img>
                <h4>Pending Rewards</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
