import React, { useState } from "react";
import { Link } from 'react-scroll';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-4 py-2  bg-white/10 sticky top-0 shadow lg:px-8 lg:py-3 backdrop-blur-sm backdrop-saturate-150 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between font-semibold mx-auto text-purple-400 ">
        {/* Logo */}
        <Link to="aravind" smooth={true} duration={500}>
        <a
          href="#"
          className="mr-4 block cursor-pointer py-1.5 text-xl text-purple-400  font-bold"
        >
          ARAVIND
        </a>
</Link>
   
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="relative ml-auto h-10 w-10 rounded-lg text-white lg:hidden focus:outline-none"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                // X icon when open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </span>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto`}
        >
          <ul className="flex flex-col gap-4 mt-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
            <Link to="artworks" smooth={true} duration={500}>
            <li>
              <a href="#artworks" className="text-sm hover:text-blue-400">
                Artworks
              </a>
            </li>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
            <li>
              <a href="#skills" className="text-sm hover:text-blue-400">
                Skills
              </a>
            </li>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
            <li>
              <a href="#projects" className="text-sm hover:text-blue-400">
                Projects
              </a>
            </li>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
            <li>
              <a href="#contact" className="text-sm hover:text-blue-400">
                Contact
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
