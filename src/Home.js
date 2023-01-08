import React from "react";
import WhoIs from "./images/WhoIs.svg";
import HomeCard from "./components/HomeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Resume from "./resume/Resume.pdf";

export default function Home() {
  const arr = [
    { title: "Developer", description: "MERN, Web3.0, Ethereum, C++" },
    {
      title: "Designer",
      description: "BLENDER, ADOBE CREATIVE SUITE, UI/UX",
    },
  ];

  return (
    <div className="bg-background-image-mobile md:bg-background-image bg-cover text-white min-h-screen">
      <div className="flex h-screen justify-between items-center pl-8 pr-8 md:pl-16 lg:pl-32 md:pr-0">
        <div className="flex-col items-center">
          <img src={WhoIs} alt="WhoIs" className="w-72 md:w-96" />
          <div className="flex md:flex-row flex-col gap-4 mt-8 md:mt-16">
            {arr.map((item, index) => {
              return (
                <HomeCard title={item.title} description={item.description} />
              );
            })}
          </div>
          <div className="flex gap-16 mt-12 md:mt-24">
            <a
              className="flex gap-2 text-3xl md:text-4xl text-[#7DB0A5] hover:cursor-pointer"
              href={Resume}
              target="_blank"
              download="Resume.pdf"
            >
              <FontAwesomeIcon icon={solid("eye")} />
              <p className="uppercase font-bebas font-bold tracking-wide">
                Resume.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
