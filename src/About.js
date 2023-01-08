import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PersonalImage from "./images/PersonalImage.jpg";
import PersonalImagePlaceholder from "./images/PersonalImagePlaceholder.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function About() {
  return (
    <div className="bg-[#191819] xl:bg-background-about bg-cover text-white min-h-screen">
      <div className="flex flex-col xl:flex-row min-h-screen justify-center items-center py-24 px-8 xl:py-0 xl:px-0">
        <div className="xl:px-0 md:w-1/2 xl:w-1/4 rounded-t-2xl overflow-hidden shadow-xl xl:-mt-24">
          <LazyLoadImage
            src={PersonalImage}
            alt="Personal Image"
            placeholderSrc={PersonalImagePlaceholder}
            effect="blur"
            className=""
          />
        </div>
        <div className="md:w-5/6 xl:w-3/5 bg-[#1f1f1f] -mt-4 xl:-ml-16 xl:mt-24 text-white p-4 xl:p-8 rounded-b-2xl shadow-xl font-source text-justify z-10">
          <p className="font-east text-8xl xl:text-9xl -mt-4 xl:-mt-24 text-center xl:text-right text-green-500">
            About
          </p>
          <div className="text-sm xl:text-base">
            <p className="mt-4">
              Himanshu Chittora would describe himself as "An Explorer" if he
              had to describe himself in a few words. In terms of learning new
              things and improving upon them, he is eager to do so.
            </p>
            <br />
            <p>
              A native of Kota and a resident of Bhiwadi, Rajasthan. Currently,
              he is a third-year student at the Indian Institute of Information
              Technology, Kota, studying Computer Science and Engineering.
            </p>
            <p>
              His passion for computers started at an early age, and now he has
              skills related to Full Stack Web Development. Currently, he is
              immersing himself in the sea of blockchain technology and learning
              a lot about it.
            </p>
            <p>
              When he's not doing academic work, he enjoys playing cricket,
              reading books, watching movies, and is a part of the Institute's
              cricket team.
            </p>
            <br />
            <p>
              Motivated to work efficiently with his team and teach them new
              skills as well. The desire to learn and explore new things to be
              better every day drives him to get up early, learn new things, and
              stay motivated.
            </p>
          </div>
          <div className="flex flex-wrap text-sm justify-between gap-2 mt-8">
            {[
              "HTML5",
              "CSS3",
              "Bootstrap",
              "JavaScript",
              "jQuery",
              "ReactJS",
              "NextJS",
              "NodeJS",
              "ExpressJS",
              "Redux",
              "React Query",
              "JSON",
              "RestAPI",
              "MongoDB",
              "RavenDB",
              "MERN",
              "Solidity",
              "Blockchain",
              "Ethers.js",
              "Git",
              "Scrum",
              "Figma",
              "Blender",
              "Adobe Creative Suite",
            ].map((skill) => {
              return (
                <div className="px-2 xl:px-4 py-1 rounded bg-[#2f2f2f]">
                  <p className="text-white">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
