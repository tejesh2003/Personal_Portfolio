import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Passionate Problem Solver.",
      "Full Stack Developer.",
      "Cloud Enthusiast",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      {/* Banner content container */}
      <div className="w-full flex flex-col gap-20 mt-10">
        {" "}
        {/* Added mt-10 here */}
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <div className="flex items-center">
            {/* Left Div for Name */}
            <div className="flex">
              <h1 className="text-6xl font-bold text-white">
                Hi, I'm{" "}
                <span className="text-designColor capitalize">Tejesh</span>
              </h1>
            </div>
            {/* Right Div for Typewriter Effect */}
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-white">
                a <span>{text}</span>
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
              </h2>
            </div>
          </div>
        </div>
        {/* Description section with the background style from previous example */}
        <div className="w-[70%] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg shadow-shadowOne flex justify-center items-center mx-auto mt-6 p-8 min-h-[220px]">
          <p className="text-lg font-light leading-7 text-gray-200 tracking-wide text-center">
            With a strong foundation in Data Structures and Algorithms, and
            experience as a full-stack developer, there's a keen interest in
            building scalable, efficient applications. Knowledgeable in the MERN
            stack, along with a solid grasp of web development principles.
            Skilled in backend and frontend integration, and well-versed in
            creating responsive, user-friendly interfaces. Also enthusiastic
            about expanding expertise in cloud technologies, with a foundational
            understanding of AWS and an eagerness to dive deeper into
            cloud-based solutions and services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
