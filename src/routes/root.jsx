import {Outlet} from "react-router-dom";
import {Web3Modal} from "@web3modal/react";
import {chains, providers} from "@web3modal/ethereum";
import Navbar from "../components/Navbar";

const walletConnectConfig = {
  projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
  theme: "dark",
  accentColor: "magenta",
  ethereum: {
    appName: "urbe.eth",
    chains: [chains.polygon],
    providers: [
      providers.walletConnectProvider({
        projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
      }),
    ],
  },
};

export default function Root() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Outlet />
      <Web3Modal config={walletConnectConfig} />
    </div>
  );
}
