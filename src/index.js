import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import './Components/NavBar/Nav.css';
import Nav from './Components/NavBar/Nav.js';
import Hamburger from './Components/Hamburger/Hamburger.js';
import Nodes from './Components/Nodes/Nodes.js';
import MyNodes from './Components/MyNodes/MyNodes.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import reportWebVitals from './reportWebVitals';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { zkSync, zkSyncTestnet, mainnet, optimism, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const { chains, provider, webSocketProvider } = configureChains(
  [
    zkSync,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [zkSyncTestnet] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Router>
          <Hamburger/>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/mynodes" element={<MyNodes />} />
            <Route path="/nodes" element={<Nodes />} />
          </Routes>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
