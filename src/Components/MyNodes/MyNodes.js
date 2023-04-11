import "../Dashboard/Dashboard.css";
import "../NavBar/Nav.css";
import "./MyNodes.css";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import Scale from "../../SVG/Scale.svg";
import User from "../../SVG/User.svg";
import Reload from "../../SVG/Reload.svg";
import Hexagon from "../../SVG/Hexagon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function MyNodes(props) {

  return (
    <div className="Main">
      <div className="Wrap">
        <div className="head">
          <ConnectButton />

        </div>

        <div className="stats">
          <div className="stats-title">
            <h1>My Nodes</h1>
          </div>
          <div className="wrap-cards">
            <div className="card">
              <div className="card-title">
                <img src={Reload} alt="Price"></img>
                <h4>Pending Rewards</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <img src={User} alt="Price"></img>
                <h4>My Nodes</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <img src={Scale} alt="Price"></img>
                <h4>My $HONEY Balance</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="mynodes">
            <div className="myheader">

                <h2>My Ghost Nodes</h2>
                <button>Claim Selected Nodes</button>

            </div>
            <div className="mycontent">
                <div className="ranger">
                    <input  className="custom-checkbox" type={"checkbox"}></input>
                    <h6>Node ID</h6>
                    <h6>Date</h6>
                    <h6>Last Claim Date</h6>
                    <h6>ROI Date</h6>
                    <h6>Pending Rewards</h6>
                    <h6>Current Life</h6>
                </div>

                <div className="reste">
                    <div className="contour">

                        <img src={Hexagon} alt="Price"></img>
                        <h2>You don't have any nodes yet.</h2>
                    </div>
                </div>

            </div>
        </div>

       
      </div>
    </div>
  );
}

export default MyNodes;
