import {useAccount, useConnectModal} from "@web3modal/react";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {shortenHex} from "../utils";

export default function Navbar() {
  const [color, setColor] = useState("transparent");
  const {account} = useAccount();
  const {isOpen, open} = useConnectModal();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("scroll", (_) => {
      if (window.scrollY < 20) {
        setColor("transparent");
        return;
      }
      if (
        window.scrollY < window.innerHeight ||
        window.scrollY < window.innerHeight * 2 - 60
      ) {
        setColor("white");
      }
      if (window.scrollY >= window.innerHeight * 2 - 60) {
        setColor("magenta");
      }
    });
  }, []);

  const scrollTo = (id) => {
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView({behavior: "smooth", block: "start"});
  };

  return (
    <div
      className={`w-full fixed ${
        color === "white"
          ? "bg-white"
          : color === "magenta"
          ? "bg-[#CC2B5E]"
          : "bg-transparent"
      } flex items-center justify-between px-4 pt-2 pb-2 transition-colors z-40`}
    >
      {color === "magenta" ? (
        <img
          src="/logo-white.png"
          className="h-12 mt-1 cursor-pointer"
          onClick={() => navigate("/")}
        />
      ) : (
        <img
          src="/logo.png"
          className="h-12 mt-1 cursor-pointer"
          onClick={() => navigate("/")}
        />
      )}
      <div className="flex items-center justify-evenly space-x-0 md:space-x-8 font-semibold">
        <p
          onClick={() => scrollTo("about")}
          className={`hidden md:block cursor-pointer select-none hover:underline ${
            color === "magenta" ? "text-white" : "text-auto"
          }`}
        >
          About
        </p>
        <p
          onClick={() => scrollTo("activities")}
          className={`hidden md:block cursor-pointer select-none hover:underline ${
            color === "magenta" ? "text-white" : "text-auto"
          }`}
        >
          Activities
        </p>
        {color === "magenta" ? (
          account.address ? (
            <div className="rounded-full bg-white px-4 py-2  cursor-pointer select-none border-r-4 border-b-4 border-[#29314d] active:border-none">
              {shortenHex(account.address)}
            </div>
          ) : isOpen ? (
            <div className="rounded-full bg-white px-4 py-2  cursor-pointer select-none border-r-4 border-b-4 border-[#29314d] active:border-none">
              <span className="animate-pulse">Connecting..</span>
            </div>
          ) : (
            <div
              className="rounded-full bg-white px-4 py-2  cursor-pointer select-none border-r-4 border-b-4 border-[#29314d] active:border-none"
              onClick={() => open()}
            >
              Connect 🔌
            </div>
          )
        ) : account.address ? (
          <div
            className="rounded-full bg-gradient-to-r from-[#CC2B5E] to-[#753A88] px-4 py-2 text-white cursor-pointer select-none border-r-4 border-b-4 border-[#29314d] active:border-none"
            onClick={() => navigate(`/profile/${account.address}`)}
          >
            {shortenHex(account.address)}
          </div>
        ) : isOpen ? (
          <div
            className="rounded-full bg-gradient-to-r from-[#CC2B5E] to-[#753A88] px-4 py-2 text-white cursor-pointer select-none border-r-4 border-b-4 border-[#29314d] active:border-none"
            onClick={() => {}}
          >
            <span className="animate-pulse">Connecting..</span>
          </div>
        ) : (
          <div
            className="rounded-full bg-gradient-to-r from-[#CC2B5E] to-[#753A88] px-4 py-2 text-white cursor-pointer select-none border-r-4 border-b-4 border-[#29314d] active:border-none"
            onClick={() => open()}
          >
            Connect 🔌
          </div>
        )}
      </div>
    </div>
  );
}
