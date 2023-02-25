import Image from "next/image";
import React from "react";

function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 widescreen:section-min-height tallscreen:section-min-height scroll-mt-20"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            I am a Web Developer with more than 4 years of professional
            experience, I am experienced in front/backend web development and
            worked with open-source technologies like ExpressJS, Laravel,
            Codegniter and WordPress.
          </p>
          <p className="py-2 text-gray-600">
            I worked with front-end frameworks as well like Angular JS, React,
            tailwind CSS and Bootstrap. Building state-of-the-art, easy-to-use,
            user-friendly websites, and applications is truly a passion of mine.
          </p>
          <p className="py-2 text-gray-600 cursor-pointer underline">
            Check out some of my latest Projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/profile.jpg"
            alt="/"
            width="100"
            height="100"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
