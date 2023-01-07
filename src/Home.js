import React from "react";
import WhoIs from "./images/WhoIs.svg";
import HomeCard from "./components/HomeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

export default function Home() {
  const arr = [
    { title: "Programming", description: "MERN, BLOCKCHAIN, C++" },
    {
      title: "Designing",
      description: "BLENDER, ADOBE CREATIVE SUITE, UI/UX",
    },
  ];

  return (
    <div className="bg-background-image bg-cover text-white min-h-screen h-screen">
      <div className="flex h-screen justify-between items-center pl-32">
        <div className="flex-col items-center">
          <img src={WhoIs} alt="" className="w-96" />
          <div className="flex mt-16">
            {arr.map((item, index) => {
              return (
                <HomeCard title={item.title} description={item.description} />
              );
            })}
          </div>
          <Link
            className="mt-24 flex gap-2 text-4xl text-[#7DB0A5] hover:cursor-pointer"
            to="/work"
          >
            <FontAwesomeIcon icon={solid("eye")} />
            <p className="uppercase font-bebas font-bold tracking-wide">
              Work.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
