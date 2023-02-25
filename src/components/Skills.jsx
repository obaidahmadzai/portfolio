import React from "react";
import Skill from "./Skill";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#5652e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill title="HTML" iconUrl="/../public/html-240.png" />
          <Skill title="CSS" iconUrl="/../public/CSS-240.png" />
          <Skill title="Tailwind" iconUrl="/../public/tailwindcss-240.png" />
          <Skill title="JavaScript" iconUrl="/../public/javascript-240.png" />
          <Skill title="React" iconUrl="/../public/react-240.png" />
          <Skill title="GitHub" iconUrl="/../public/github-240.png" />
          <Skill title="Php" iconUrl="/../public/php.png" />
          <Skill title="MySql" iconUrl="/../public/mysql.png" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
