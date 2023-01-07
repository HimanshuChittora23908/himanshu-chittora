import React from "react";
import PersonalImage from "./images/PersonalImage.jpg";

export default function About() {
  return (
    <div className="bg-background-about bg-cover text-white h-screen">
      <div className="flex h-screen justify-center items-center">
        <div className="w-1/4 rounded-2xl overflow-hidden shadow-lg">
          <img src={PersonalImage} alt="" />
        </div>
        <div className="w-2/5 bg-[#1f1f1f] -ml-16 mt-24 text-white p-8 rounded-2xl shadow-lg font-source text-justify">
          <p className="font-east text-9xl -mt-24 text-right text-green-500">
            About
          </p>
          <p className="mt-4">
            Himanshu Chittora would describe himself as "An Explorer" if he had
            to describe himself in a few words. In terms of learning new things
            and improving upon them, he is eager to do so.
          </p>
          <br />
          <p>
            A native of Kota and a resident of Bhiwadi, Rajasthan. Currently, he
            is a third-year student at the Indian Institute of Information
            Technology, Kota, studying Computer Science and Engineering.
          </p>
          <p>
            His passion for computers started at an early age, and now he has
            skills related to Full Stack Web Development. Currently, he is
            immersing himself in the sea of blockchain technology and learning a
            lot about it.
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
      </div>
    </div>
  );
}
