import Image from "next/image";
import React from "react";
import projectUCAC from "../../public/project1.png";

function ucac() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        {/* <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectUCAC}
          alt="/"
        /> */}
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%]">
          <h2 className="py-2">UCAC International</h2>
          <h3>Laravel / Voyager / Bootstrap</h3>
        </div>
      </div>
    </div>
  );
}

export default ucac;
