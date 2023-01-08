import React from "react";

export default function HomeCard({ title, description }) {
  return (
    <div className="w-full md:w-64">
      <h1 className="font-bebas text-2xl md:text-4xl">{title}</h1>
      <p className="uppercase font-source font-light md:text-xl">
        {description}
      </p>
    </div>
  );
}
