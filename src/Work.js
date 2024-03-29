import React, { useState } from "react";
import eDaftarMockup from "./images/eDaftarMockup.png";
import eDaftarMockupPlaceholder from "./images/eDaftarMockupPlaceholder.png";
import HostelVerseMockup from "./images/HostelVerseMockup.png";
import HostelVerseMockupPlaceholder from "./images/HostelVerseMockupPlaceholder.png";
import MelioLabsMockup from "./images/MelioLabsMockup.png";
import MelioLabsMockupPlaceholder from "./images/MelioLabsMockupPlaceholder.png";
import acadHEREMockup from "./images/acadHEREMockup.png";
import acadHEREMockupPlaceholder from "./images/acadHEREMockupPlaceholder.png";
import SFAPlayMockup from "./images/SFAPlayMockup.png";
import SFAPlayMockupPlaceholder from "./images/SFAPlayMockupPlaceholder.png";
import Design1 from "./images/Design1.png";
import Design1Placeholder from "./images/Design1Placeholder.png";
import Design2 from "./images/Design2.png";
import Design2Placeholder from "./images/Design2Placeholder.png";
import Design3 from "./images/Design3.png";
import Design3Placeholder from "./images/Design3Placeholder.png";
import Design4 from "./images/Design4.png";
import Design4Placeholder from "./images/Design4Placeholder.png";
import Design5 from "./images/Design5.png";
import Design5Placeholder from "./images/Design5Placeholder.png";
import Design6 from "./images/Design6.png";
import Design6Placeholder from "./images/Design6Placeholder.png";

import WorkCard from "./components/WorkCard";

export default function Work() {
  const [selected, setSelected] = useState(0);

  const programming = [
    {
      title: "Melio Labs",
      subtitle: "Software Developer Intern",
      duration: "July 2022 - Present",
      description: [
        "Support the development of Melio's data pipeline and DNA melting time-series analysis.",
        "Accelerated product development speed by 25% by building visualization and GUI tools to support Melt platform development.",
      ],
      link: "https://www.melio.tech/",
      img: MelioLabsMockup,
      placeholder: MelioLabsMockupPlaceholder,
    },
    {
      title: "eDaftar",
      subtitle: "Frontend Developer, UI/UX Designer",
      duration: "March 2022 - Present",
      description: [
        "Saving an average of 10,000 sheets of office paper per year by implementing a web-based solution to track the status of document/file going through the approval process in any department",
        "Centralized server allowing an average of 300 requests per second.",
        "A user-friendly environment similar to popular email platforms",
        "Halved the file approval time from 15 - 20 to 8 - 10 days.",
        "Tech Stacks: MERN, Tailwind, React Query, Heroku, Azure, TypeScript, Redis",
      ],
      link: "https://sih-2022.vercel.app/",
      img: eDaftarMockup,
      placeholder: eDaftarMockupPlaceholder,
    },
    {
      title: "Hybrowlabs Technologies Pvt. Ltd.",
      subtitle: "ReactJS Developer Intern",
      duration: "October 2021 - April 2022",
      description: [
        "Build a web-based platform allowing users to register and keep track of various sporting events worldwide.",
        "Fixed bugs, implemented new features and modules on a daily basis.",
        "Implemented best coding practices to cut rework by 25% and bring cost down by 15%.",
        "Improved the website performance by 33% using React Query, a library used to optimize cache.",
      ],
      link: "https://app.sfaplay.com/",
      img: SFAPlayMockup,
      placeholder: SFAPlayMockupPlaceholder,
    },
    {
      title: "HostelVerse",
      subtitle: "Frontend Developer, UI/UX Designer",
      duration: "January 2022 - August 2022",
      description: [
        "Eliminated use of 1,000 sheets per day with a web-based solution to automate hostel allotment procedure and answer all hostel-related queries in one place.",
        "Overhauled existing and introduced new advanced logic to prevent misuse of features such as Hostel Check-In / Check-Out.",
        "Hostel allocation feature takes 1 / 2 / 3-seater rooms into consideration.",
        "Tech Stack: ReactJs, Tailwind, NodeJs, ExpressJs, Heroku, Redis",
      ],
      link: "https://hostelverse.vercel.app/",
      img: HostelVerseMockup,
      placeholder: HostelVerseMockupPlaceholder,
    },
    {
      title: "acadHERE",
      subtitle: "Frontend Developer, UI/UX Designer",
      duration: "June 2021 - August 2021",
      description: [
        "Created a platform to simplify the search for things for students cutting down data usage up to 30%.",
        "Enhanced performance, doubling the productivity by 50% and improved security to prevent abuse.",
        "Tech Stacks: ReactJs, CSS, NodeJs, ExpressJs, Heroku, Redis, GoogleClassroom-API, Google-OAuth",
      ],
      link: "https://acadhere.vercel.app/",
      img: acadHEREMockup,
      placeholder: acadHEREMockupPlaceholder,
    },
  ];

  const designing = [
    {
      type: "Short Film",
      title: "Animate",
      about:
        "A short film to fight against the global occurring issue of depression. The film is designed to spread awareness about the issue and to help people who are suffering from it.",
      img: Design1,
      placeholder: Design1Placeholder,
      link: "https://drive.google.com/file/d/1oY33BXZ_8lArD7Y5P2QylJ_9LB8V4ir_/view?usp=sharing",
    },
    {
      type: "Sci-Fi",
      title: "Plasma Ball",
      about:
        "A sci-fi concept design for a plasma ball to showcase the power of light and its ability to create a plasma ball.",
      img: Design2,
      placeholder: Design2Placeholder,
      link: "https://drive.google.com/file/d/1faixokCjx3rfenxaohOMuilTjCz3MiQt/view?usp=sharing",
    },
    {
      type: "Toy",
      title: "Teddy Bear",
      about: "A fluffy teddy bear to keep you company in your lonely times.",
      img: Design3,
      placeholder: Design3Placeholder,
      link: "https://drive.google.com/file/d/1VCAHs4dH5DyatsCCd8l6H86cw-WZqUfZ/view?usp=sharing",
    },
    {
      type: "Abstract",
      title: "Ring & Ball",
      about:
        "An abstract art design to understand symmetry and balance. It also makes us understand power of simplicity and sound.",
      img: Design4,
      placeholder: Design4Placeholder,
      link: "https://drive.google.com/file/d/1wXkpCZVtqc3Gt-ohirMse_lcwxrT5nQ7/view?usp=sharing",
    },
    {
      type: "Food",
      title: "Donut",
      about: "A donut to satisfy your sweet tooth.",
      img: Design5,
      placeholder: Design5Placeholder,
      link: "https://drive.google.com/file/d/1itq1m5ifzPWzSNCTls4E0uyQiwwpHBVY/view?usp=sharing",
    },
    {
      type: "Abstract",
      title: "Rain",
      about:
        "A satisfying abstract art design to calm your mind. Take you closer to nature. Take a deep breath and relax. Have a break.",
      img: Design6,
      placeholder: Design6Placeholder,
      link: "https://drive.google.com/file/d/1banUY1EjEbOGOqFvJ6hcrmMC0syunALs/view?usp=sharing",
    },
  ];

  return (
    <div className="bg-[#191819] min-h-screen px-8 lg:px-0">
      <p className="font-bebas text-5xl md:text-7xl text-white text-center pt-24 tracking-widest">
        Work
      </p>
      <div className="flex justify-center pt-8 md:pt-16">
        <div className="flex justify-around lg:justify-between items-center w-full lg:w-1/2">
          {["Programming", "Designing"].map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  selected === index
                    ? "text-[#7DB0A5] border-[#7DB0A5]"
                    : "text-white border-white"
                } font-bebas text-lg lg:text-2xl border-b-4 pb-2 px-4 cursor-pointer tracking-wider`}
                onClick={() => setSelected(index)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center text-white -mt-16">
        {selected === 0 ? (
          <div className="w-full lg:w-3/4 my-24 lg:my-32 flex flex-col gap-y-32 lg:gap-y-64">
            {programming.map((item, index) => {
              return <WorkCard data={item} index={index} />;
            })}
          </div>
        ) : (
          <div className="w-full lg:w-3/4 my-32 flex flex-col gap-y-32 lg:gap-y-64">
            {designing.map((item, index) => {
              return <WorkCard data={item} index={index} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
