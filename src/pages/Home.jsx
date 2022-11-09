import {Helmet} from "react-helmet";

export default function Home() {
  const scrollTo = (id) => {
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView({behavior: "smooth", block: "start"});
  };

  return (
    <>
      <Helmet>
        <title>urbe.eth</title>
        <meta
          name="description"
          content="Welcome to urbe.eth, the first roman community for web3 builders!"
        />
      </Helmet>
      <div className="flex flex-col">
        <div
          className="min-h-screen bg-[#E1F6E8]"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/ttten.svg"})`
          }}
        >
          <div className="h-screen flex flex-col items-center justify-center max-w-2xl mx-auto text-center space-y-4">
            <h1 className="font-bold text-4xl md:text-6xl">
              Where web3 Frens Hang Out!
            </h1>
            <h2 className="text-2xl">
              Connecting Web3 frens in Rome, one meetup at a time! 🐺
            </h2>

            <div
              className="rounded-full mt-8 bg-gradient-to-r from-[#CC2B5E] to-[#753A88] px-4 py-2 font-semibold text-white cursor-pointer select-none border-r-4 border-b-4 border-1 border-[#29314d] active:border-none transition-transform hover:scale-105"
              onClick={() =>
                window.open("https://discord.com/invite/tr8KMmC2aF", "_blank")
              }
            >
              Join the community 🎉
            </div>
          </div>
        </div>

        <div className="min-h-screen bg-white relative" id="about">
          <div className="h-screen flex flex-col items-center justify-center p-4 z-10 relative">
            <div className="p-12 md:p-24 rounded-2xl max-w-2xl mx-auto text-center space-y-4 bg-[#E1F6E8] border-4 border-r-8 border-b-8 border-[#29314d] ">
              <h1 className="font-bold text-2xl md:text-4xl">
                Who is this for?
              </h1>
              <h2 className="text-xl">
                This community is for all the builders that believe in the web3
                and that want to build a new future together.
              </h2>
              <h3
                className="cursor-pointer underline select-none transition-transform hover:scale-105"
                onClick={() => scrollTo("activities")}
              >
                View our activities &gt;
              </h3>
            </div>
          </div>
          <div
            className="absolute top-0 left-0 h-full w-full z-0 opacity-5"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/background.png"
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
        </div>

        <div
          className="min-h-screen bg-[#CC2B5E] flex flex-col items-center justify-center"
          id="activities"
        >
          <div className="min-h-screen h-full py-12 px-4 flex flex-col items-center justify-center space-y-8">
            <h2 className="text-white text-2xl md:text-4xl font-black">
              What's in store?
            </h2>
            <div className="rounded-2xl max-w-6xl mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl flex flex-col items-start justify-start text-left space-y-4 bg-[#E1F6E8] shadow-lg select-none">
                <h3 className="font-bold text-xl md:text-2xl">
                  Community members
                </h3>
                <h4 className="text-lg md:text-xl">
                  Our Discord currently has{" "}
                  <span className="font-semibold">300</span> active members, and
                  growing!
                </h4>
              </div>
              <div className="p-8 rounded-2xl flex flex-col items-start justify-start text-left space-y-4 bg-[#E1F6E8] shadow-lg select-none">
                <h3 className="font-bold text-xl md:text-2xl">ETHPub Live</h3>
                <h4 className="text-lg md:text-xl">
                  We organize in-person meetups in Rome in front of a beer!
                </h4>
              </div>
              <div className="p-8 rounded-2xl flex flex-col items-start justify-start text-left space-y-4 bg-[#E1F6E8] shadow-lg select-none">
                <h3 className="font-bold text-xl md:text-2xl">UrbeTalks</h3>
                <h4 className="text-lg md:text-xl">
                  5 pitches, 10 minutes each, free beers and snacks: what else?
                </h4>
              </div>
              <div className="p-8 rounded-2xl flex flex-col items-start justify-start text-left space-y-4 bg-[#E1F6E8] shadow-lg select-none">
                <h3 className="font-bold text-xl md:text-2xl">
                  Community projects
                </h3>
                <h4 className="text-lg md:text-xl">
                  We have 2 active projects:{" "}
                  <span className="font-semibold">Urbe Arena ⚔️</span> and{" "}
                  <span className="font-semibold">DuneJourney</span>.
                </h4>
              </div>
              <div className="p-8 rounded-2xl flex flex-col items-start justify-start text-left space-y-4 bg-[#E1F6E8] shadow-lg select-none">
                <h3 className="font-bold text-xl md:text-2xl">
                  Urbe Delegation
                </h3>
                <h4 className="text-lg md:text-xl">
                  We fly together to Ethereum Events all around the world! Come
                  join us!
                </h4>
              </div>
              <div className="p-8 rounded-2xl flex flex-col items-start justify-start text-left space-y-4 bg-[#E1F6E8] shadow-lg select-none">
                <h3 className="font-bold text-xl md:text-2xl">
                  web3 co-working
                </h3>
                <h4 className="text-lg md:text-xl">
                  We organise co-working days strictly related to the web3.
                </h4>
              </div>
            </div>
            <div
              className="transition-transform hover:-skew-y-1 font-semibold z-20 text-xl md:text-2xl flex h-16 items-center justify-center rounded-full bg-[#6E61FF] px-8 py-4 text-white cursor-pointer select-none border-r-4 border-b-4 border-black active:border-none"
              onClick={() =>
                window.open("https://discord.com/invite/tr8KMmC2aF", "_blank")
              }
            >
              Hosted on <span className="font-black ml-2"> Discord</span>! 👾
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
