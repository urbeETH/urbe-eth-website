import {useEffect, useState} from "react";
import {useLoaderData, useNavigate} from "react-router-dom";
import {alchemy, shortenHex} from "../utils";

export async function loader({params}) {
  return params;
}

export default function Kudos() {
  const {address, tokenId} = useLoaderData();
  const [kudosData, setKudosData] = useState(null);
  const [owners, setOwners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const ownersRes = await alchemy.nft.getOwnersForNft(address, tokenId);
    const kudosRes = await alchemy.nft.getNftMetadata(address, tokenId);
    console.log(ownersRes.owners);
    console.log(kudosRes);
    setOwners(ownersRes.owners);
    setKudosData(kudosRes);
  };

  if (!kudosData) {
    return (
      <div className="min-h-screen w-full bg-[#E1F6E8] flex flex-col items-center justify-center space-y-2 py-32 px-4 md:px-8">
        <span className="animate-pulse  text-2xl font-bold">Loading..</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#E1F6E8] flex flex-col items-center space-y-8 py-32 px-4 md:px-8">
      <div className="flex flex-col items-center max-w-3xl space-y-4 space-x-0 md:space-x-8 md:space-y-0 md:flex-row">
        <img
          src={kudosData.media[0].gateway}
          className="h-64 w-64 rounded-2xl"
        />
        <div className="flex flex-col items-center md:items-start justify-center space-y-2">
          <h1 className="font-bold text-2xl">{kudosData.title}</h1>
          <p className="text-center md:text-left">{kudosData.description}</p>
          <div className="flex space-x-2">
            <div
              onClick={() => {
                window.open(
                  `https://opensea.io/assets/matic/${address}/${tokenId}`,
                  "_blank"
                );
              }}
              className="bg-white px-4 py-1 rounded-full font-semibold cursor-pointer select-none border-r-4 border-b-4 border-[#29314d] active:border-none"
            >
              OpenSea
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 w-full items-center md:items-start max-w-3xl">
        <h3 className="font-semibold text-xl">Claimed by</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {owners.map((owner) => {
            return (
              <div
                onClick={() => navigate(`/profile/${owner}`)}
                className="px-4 py-1 bg-white rounded-full cursor-pointer select-none"
              >
                {shortenHex(owner)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
