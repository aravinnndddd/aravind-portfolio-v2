import React from "react";
import { TypeAnimation } from "react-type-animation";
import heropic from "/assets/bgImg1.png";
import "../App.css";
import { Link } from "react-scroll";
export default function About() {
  return (
    <div
      id="about"
      className="h-[100vh] border-b-2 border-neutral-500 flex flex-col justify-center md:flex-row m-5 md:pt-[10vh] "
    >
      <div className="h-[80vh] md:h-[70vh] border-l-2 border-l-blue-700 pt-10 w-[90%] bg-white/10 backdrop-blur-md rounded-[20px] absolute  mx-auto">
        {/* <div className="relative top-[25px] left-[25px] flex gap-2 w-fit h-[30px]">
          <span className="bg-red-500 w-4 h-4 rounded-full block"></span>
          <span className="bg-yellow-500 w-4 h-4 rounded-full block"></span>
          <span className="bg-green-500 w-4 h-4 rounded-full block"></span>
        </div> */}

        <div className="  flex flex-col  md:flex-row w-full px-5 h-full">
          <div className="md:w-5/12 w-8/12 mx-auto h-[25vh] md:h-[50vh] flex flex-col justify-center items-center">
            <img
              id="heropic"
              className="md:w-full  md:h-full md:object-contain "
              src={heropic}
              alt="astro"
            />
          </div>

          <div className="text-purple-400 md:w-10/12 h-[50vh] flex flex-col md:justify-center leading-7 ">
            <h2 className="font-bold md:text-3xl text-2xl text-center mb-2">Hi, I'm Aravind</h2>

            <code className="text-indigo-400 md:text-xl text-center mb-4">
              I'm {" "}
              <TypeAnimation
                sequence={[
                  "a Coder",
                  1500,
                  "a Web Developer",
                  1500,
                  "an Artist",
                  1500,
                  "a Tech Enthusiast",
                  1500,
                  "a Gamer",
                  1500,
                  "a Student",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </code>

            <code className="leading-7 text-[1rem]">
              That guy who  love for coding,{" "}
              <Link to="artworks" smooth={true} duration={500}>
                <a href="#artworks" className="underline font-bold">
                  Drawing,
                </a>
              </Link>{" "}
              gaming, and learing new{" "}
              <Link to="skills" smooth={true} duration={500}>
                <a href="#skills" className="underline font-bold">
                  Skills
                </a>
              </Link>
              . I enjoy building{" "}
              <Link to="projects" smooth={true} duration={500}>
                <a href="#projects" className="underline font-bold">
                  Projects
                </a>
              </Link>
              , and I'm currently diving deep into web development. Let's{" "}
              <Link to="contact" smooth={true} duration={500}>
                <a href="#contact" className="underline font-bold">
                  Connect
                </a>
              </Link>{" "}
              and create something amazing!
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
