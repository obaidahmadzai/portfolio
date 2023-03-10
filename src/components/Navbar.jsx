import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [nav, SetNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handelNav = () => {
    SetNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      id="navbar"
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]  bg-[#ecf0f3]"
          : "fixed w-full h-20 z-[100] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Image
          src="/../public/navbarLogo.png"
          alt="/"
          width="125"
          height="50"
        ></Image>
        <div>
          <ul className="hidden md:flex">
            <a href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </a>
            <a href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </a>
            <a href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </a>
            <a href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </a>
            <a href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Cantact
              </li>
            </a>
          </ul>
          <div onClick={() => handelNav()} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:-[45%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500 "
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/navbarLogo.png"
                alt="/"
                width="87"
                height="35"
              ></Image>
              <div
                onClick={() => handelNav()}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something lengedary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="/#home">
                <li onClick={() => SetNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </a>
              <a href="/#about">
                <li onClick={() => SetNav(false)} className="py-4 text-sm">
                  About
                </li>
              </a>
              <a href="/#skills">
                <li onClick={() => SetNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </a>
              <a href="/#projects">
                <li onClick={() => SetNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </a>
              <a href="/#contact">
                <li onClick={() => SetNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </a>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
