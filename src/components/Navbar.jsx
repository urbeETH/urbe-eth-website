import React, {useEffect, useState} from "react";

export default function Navbar() {
  const [color, setColor] = useState("transparent");

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
        setColor("orange");
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
          : color === "orange"
          ? "bg-[#CC2B5E]"
          : "bg-transparent"
      } flex items-center justify-between px-4 pt-2 pb-2 transition-colors z-40`}
    >
      {color === "orange" ? (
        <img src="/logo-white.png" className="h-12 mt-1" />
      ) : (
        <img src="/logo.png" className="h-12 mt-1" />
      )}
      <div className="flex items-center justify-evenly space-x-8 font-semibold">
        <p
          onClick={() => scrollTo("about")}
          className={`cursor-pointer select-none hover:underline ${
            color === "orange" ? "text-white" : "text-auto"
          }`}
        >
          About
        </p>
        <p
          onClick={() => scrollTo("activities")}
          className={`cursor-pointer select-none hover:underline ${
            color === "orange" ? "text-white" : "text-auto"
          }`}
        >
          Activities
        </p>
        {color === "orange" ? (
          <div
            className="hidden md:block rounded-full bg-white px-4 py-2  cursor-pointer select-none border-r-4 border-b-4 border-[#29314d] active:border-none"
            onClick={() =>
              window.open("https://discord.com/invite/tr8KMmC2aF", "_blank")
            }
          >
            Join the community 🎉
          </div>
        ) : (
          <div
            className="hidden md:block rounded-full bg-gradient-to-r from-[#CC2B5E] to-[#753A88] px-4 py-2 text-white cursor-pointer select-none border-r-4 border-b-4 border-[#29314d] active:border-none"
            onClick={() =>
              window.open("https://discord.com/invite/tr8KMmC2aF", "_blank")
            }
          >
            Join the community 🎉
          </div>
        )}
      </div>
    </div>
  );
}
