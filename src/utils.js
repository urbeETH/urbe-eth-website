import {Alchemy, Network} from "alchemy-sdk";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY, // Replace with your Alchemy API key.
  network: Network.MATIC_MAINNET,
};

export const alchemy = new Alchemy(settings);
export function shortenHex(hex, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(
    hex.length - length
  )}`;
}
