import React from "react";
import ProjectUCAC from "../../public/project1.png";
import projectABC from "../../public/project2.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div
      id="projects"
      className="w-full  widescreen:section-min-height tallscreen:section-min-height scroll-mt-20"
    >
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="UCAC International"
            backgroundImage={ProjectUCAC}
            projectUrl="/ucac"
          />
          <ProjectItem
            title="ABC"
            backgroundImage={projectABC}
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
