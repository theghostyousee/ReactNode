import "../Dashboard/Dashboard.css";
import "../NavBar/Nav.css";
import "./Nodes.css";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import Total from "../../SVG/Total.svg";
import Scale from "../../SVG/Scale.svg";
import Award from "../../SVG/Awards.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Nodes(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {}, 3000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="Main">
      <div className="Wrap">
        <div className="head">
          <ConnectButton />

        </div>

        <div className="stats">
          <div className="stats-title">
            <h1>Hive Nodes</h1>
          </div>
          <div className="wrap-cards">
            <div className="card">
              <div className="card-title">
                <img src={Total} alt="Price"></img>
                <h4>Total Nodes</h4>
              </div>
              <div className="card-content">
                <h2>- -</h2>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <img src={Award} alt="Price"></img>
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

        <div className="mint">
          <div className="mint-title">
            <h1>Mint Nodes</h1>
          </div>

          <div className="wrap-mint">
            <div className="card-mint">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  backgroundColor: "#151414",
                  width: "100%",
                  height: "35%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContentLoader
                  speed={2}
                  width={"90%"}
                  title=""
                  height={200}
                  viewBox="0 0 500 200"
                  backgroundColor="#222"
                  foregroundColor="#333"
                >
                  <rect x="0" y="10" rx="40" ry="40" width="70%" height="80" />
                </ContentLoader>
              </div>

              <div className="mint-image">
                <ContentLoader
                  speed={2}
                  width={"90%"}
                  height={"100%"}
                  viewBox="0 0 500 200"
                  title=""
                  backgroundColor="#222"
                  foregroundColor="#333"
                >
                  <rect x="0" y="0" rx="20" ry="20" width="100%" height="40" />
                  <rect x="0" y="48" rx="20" ry="20" width="70%" height="30" />
                  <rect x="0" y="89" rx="20" ry="20" width="87%" height="30" />
                </ContentLoader>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  backgroundColor: "#151414",
                  width: "100%",
                  height: "35%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContentLoader
                  speed={2}
                  width={"90%"}
                  height={"100%"}
                  viewBox="0 0 500 200"
                  backgroundColor="#222"
                  title=""
                  foregroundColor="#333"
                >
                  <rect x="0" y="0" rx="20" ry="20" width="100%" height="40" />
                  <rect x="0" y="58" rx="20" ry="20" width="90%" height="30" />
                </ContentLoader>
              </div>
            </div>

            <div className="card-mint">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  backgroundColor: "#151414",
                  width: "100%",
                  height: "35%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContentLoader
                  speed={2}
                  width={"90%"}
                  height={200}
                  title=""
                  viewBox="0 0 500 200"
                  backgroundColor="#222"
                  foregroundColor="#333"
                >
                  <rect x="0" y="10" rx="40" ry="40" width="70%" height="80" />
                </ContentLoader>
              </div>

              <div className="mint-image">
                <ContentLoader
                  speed={2}
                  width={"90%"}
                  height={"100%"}
                  viewBox="0 0 500 200"
                  backgroundColor="#222"
                  title=""
                  foregroundColor="#333"
                >
                  <rect x="0" y="0" rx="20" ry="20" width="100%" height="40" />
                  <rect x="0" y="48" rx="20" ry="20" width="70%" height="30" />
                  <rect x="0" y="89" rx="20" ry="20" width="87%" height="30" />
                </ContentLoader>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  backgroundColor: "#151414",
                  width: "100%",
                  height: "35%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContentLoader
                  speed={2}
                  width={"90%"}
                  height={"100%"}
                  viewBox="0 0 500 200"
                  backgroundColor="#222"
                  title=""
                  foregroundColor="#333"
                >
                  <rect x="0" y="0" rx="20" ry="20" width="100%" height="40" />
                  <rect x="0" y="58" rx="20" ry="20" width="90%" height="30" />
                </ContentLoader>
              </div>
            </div>

            <div className="card-mint">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  backgroundColor: "#151414",
                  width: "100%",
                  height: "35%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContentLoader
                  speed={2}
                  width={"90%"}
                  height={200}
                  viewBox="0 0 500 200"
                  title=""
                  backgroundColor="#222"
                  foregroundColor="#333"
                >
                  <rect x="0" y="10" rx="40" ry="40" width="70%" height="80" />
                </ContentLoader>
              </div>

              <div className="mint-image">
                <ContentLoader
                  speed={2}
                  width={"90%"}
                  height={"100%"}
                  title=""
                  viewBox="0 0 500 200"
                  backgroundColor="#222"
                  foregroundColor="#333"
                >
                  <rect x="0" y="0" rx="20" ry="20" width="100%" height="40" />
                  <rect x="0" y="48" rx="20" ry="20" width="70%" height="30" />
                  <rect x="0" y="89" rx="20" ry="20" width="87%" height="30" />
                </ContentLoader>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  backgroundColor: "#151414",
                  width: "100%",
                  height: "35%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContentLoader
                  speed={2}
                  width={"90%"}
                  height={"100%"}
                  title=""
                  viewBox="0 0 500 200"
                  backgroundColor="#222"
                  foregroundColor="#333"
                >
                  <rect x="0" y="0" rx="20" ry="20" width="100%" height="40" />
                  <rect x="0" y="58" rx="20" ry="20" width="90%" height="30" />
                </ContentLoader>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nodes;
