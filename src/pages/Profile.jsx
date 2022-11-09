import {useEnsName} from "@web3modal/react";
import {useEffect, useState} from "react";
import {useLoaderData, useNavigate} from "react-router-dom";
import {alchemy, shortenHex} from "../utils";

const allowedNfts = ["2411", "2412", "2604", "2605", "13313", "13314"];

export async function loader({params}) {
  return params.address;
}

export default function Profile() {
  const address = useLoaderData();
  const {refetch} = useEnsName({address: ""});
  const [ensName, setEnsName] = useState("");
  const [nfts, setNfts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (nfts.length === 0) {
      getEnsName();
      getNfts();
    }
  }, []);

  const getEnsName = async () => {
    const res = await refetch({address});
    setEnsName(res);
  };

  const getNfts = async () => {
    const res = await alchemy.nft.getNftsForOwner(address, {
      contractAddresses: ["0x60576a64851c5b42e8c57e3e4a5cf3cf4eeb2ed6"],
    });
    setNfts(res.ownedNfts.filter((nft) => allowedNfts.includes(nft.tokenId)));
  };

  return (
    <div className="min-h-screen w-full bg-[#E1F6E8] flex flex-col items-start space-y-2 py-32 px-4 md:px-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl ml-2">
          👋🏻
          <span className="font-bold ml-1">
            {ensName || shortenHex(address)}
          </span>
        </h1>
        <h2 className="font-semibold text-xl ml-2">urbe.eth POAPs</h2>
      </div>
      <div className="space-x-4 overflow-x-scroll whitespace-nowrap max-w-full">
        {nfts.length === 0 && (
          <h3 className="ml-2">
            You do not have any{" "}
            <span className="font-semibold">urbe.eth POAP</span>!
          </h3>
        )}
        {nfts.map((nft) => {
          return (
            <div className="inline-block px-2 py-6">
              <img
                src={nft.media[0].gateway}
                onClick={() =>
                  navigate(`/kudos/${nft.contract.address}/${nft.tokenId}`)
                }
                className="rounded-lg w-64 h-64 shadow-lg active:border-none cursor-pointer transition-transform hover:scale-105"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
