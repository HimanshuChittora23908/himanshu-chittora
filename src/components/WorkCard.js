import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function WorkCard({ data, index }) {
  return (
    <div
      className={`flex flex-col-reverse justify-between w-full items-center ${
        index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="lg:w-3/5">
        <p className="font-source text-xl lg:text-2xl font-bold text-[#3f3f3f] mb-2">
          {data?.type}
        </p>
        <p className="font-bebas text-4xl lg:text-5xl tracking-wide">
          {data?.title}
        </p>
        <p className="font-source text-xl lg:text-2xl italic font-light">
          {data?.subtitle}
        </p>
        {data.duration ? (
          <p className="font-source text-lg lg:text-xl mt-1">
            <span className="font-bold">Duration:</span> {data.duration}
          </p>
        ) : null}
        {data.about ? (
          <p className="font-source text-lg lg:text-xl mt-1">{data.about}</p>
        ) : null}
        {data.description ? (
          <p className="font-source text-lg lg:text-xl">
            {data.description.map((data, index) => {
              return <li>{data}</li>;
            })}
          </p>
        ) : null}
        {data.link ? (
          <a
            className="flex gap-4 mt-4 items-center font-source text-lg lg:text-xl font-bold text-[#7DB0A5] hover:cursor-pointer"
            href={data.link}
            target="_blank"
          >
            <p className="">Learn More</p>
            <FontAwesomeIcon icon={solid("angle-right")} />
          </a>
        ) : null}
      </div>
      <div
        className={`lg:w-1/2 ${index % 2 !== 0 ? "lg:-ml-28" : "lg:-mr-28"}`}
      >
        <LazyLoadImage
          src={data.img}
          alt={data.title}
          effect="blur"
          placeholderSrc={data.placeholder}
          className="w-[600px] object-cover"
        />
      </div>
    </div>
  );
}
