import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function WorkCard({ data, index }) {
  return (
    <div
      className={`flex justify-between items-center ${
        index % 2 !== 0 ? "flex-row-reverse" : ""
      }`}
    >
      <div>
        <p className="font-source text-2xl font-bold text-[#3f3f3f] mb-2">
          {data?.type}
        </p>
        <p className="font-bebas text-5xl tracking-wide">{data?.title}</p>
        <p className="font-source text-2xl italic font-light">
          {data?.subtitle}
        </p>
        {data.duration ? (
          <p className="font-source text-xl mt-1">
            <span className="font-bold">Duration:</span> {data.duration}
          </p>
        ) : null}
        {data.about ? (
          <p className="font-source text-xl mt-1">{data.about}</p>
        ) : null}
        {data.description ? (
          <p className="font-source text-xl">
            {data.description.map((data, index) => {
              return <li>{data}</li>;
            })}
          </p>
        ) : null}
        {data.link ? (
          <div
            className="flex gap-4 mt-4 items-center font-source text-xl font-bold text-[#7DB0A5] hover:cursor-pointer"
            onClick={() => window.open(data.link)}
          >
            <p className="">Learn More</p>
            <FontAwesomeIcon icon={solid("angle-right")} />
          </div>
        ) : null}
      </div>
      <LazyLoadImage
        src={data.img}
        alt={data.title}
        className={`${data.subtitle ? "w-1/2" : "w-2/3"} ${
          index % 2 !== 0
            ? `${data.subtitle ? "-ml-16" : "-ml-36"}`
            : `${data.subtitle ? "-mr-16" : "-mr-36"}`
        }`}
      />
    </div>
  );
}
