import React from "react";
import { TypeAnimation } from "react-type-animation";
import heropic from "./assets/bgImg1.png";

export default function About() {
  return (
    <div id="about" className="h-[100vh] bg-black flex flex-row w-full mt-[20vh] px-[10%]">
      {/* Image Section */}
      <div className="w-6/12 h-[50vh] flex flex-col justify-center">
        <img className="w-full h-full object-contain" src={heropic} alt="astro" />
      </div>

      {/* Text Section */}
      <div className="text-white w-6/12 h-[50vh] flex flex-col justify-center leading-7">
        <h2 className="font-bold text-3xl mb-2">Hi, I'm Aravind</h2>

        <h3 className="text-slate-400 text-xl mb-4">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Coder", 1500,
              "Web Developer", 1500,
              "UI Designer", 1500,
              "Artist", 1500,
              "Tech Enthusiast", 1500,
              "Gamer", 1500,
              "Student", 1500
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h3>

        <p className="leading-7 text-base">
          I'm a passionate first-year B.Tech student with a love for coding, gaming, and{" "}
          <a href="#artworks" className="underline text-blue-400">
            drawing
          </a>
          . I enjoy building{" "}
          <a href="#projects" className="underline text-blue-400">
            projects
          </a>
          , and I'm currently diving deep into web development. Let's{" "}
          <a href="#contact" className="underline text-blue-400">
            connect
          </a>{" "}
          and create something amazing!
        </p>
      </div>
    </div>
  );
}
