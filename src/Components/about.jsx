import React from "react";
import { TypeAnimation } from "react-type-animation";
import heropic from "/assets/bgImg1.png";
import "../App.css"
export default function About() {
  return (
    <div id="about" className="h-[100vh] bg-black flex flex-col justify-center md:flex-row w-full mt-[10vh] px-[10%]">
    {/* Main content */}
    <div className="h-[70vh] w-10/12  bg-white/10 rounded-[20px] absolute  mx-auto">
      
      {/* Top-left dots */}
      <div className="relative top-[25px] left-[25px] flex gap-2 w-fit h-[30px]">
        <span className="bg-red-500 w-4 h-4 rounded-full block"></span>
        <span className="bg-yellow-500 w-4 h-4 rounded-full block"></span>
        <span className="bg-green-500 w-4 h-4 rounded-full block"></span>
      </div>
  
      {/* Flex container for Image + Text */}
      <div className="flex flex-col  md:flex-row w-full h-full">
        
        {/* Image Section */}
        <div className="w-5/12 h-[50vh] flex flex-col justify-center items-center">
          <img id="heropic" className="w-full h-full object-contain" src={heropic} alt="astro" />
        </div>
  
        {/* Text Section */}
        <div className="text-purple-400 md:w-6/12 h-[50vh] flex flex-col md:justify-center leading-7 ">
          <h2 className="font-bold md:text-3xl mb-2">Hi, I'm Aravind</h2>
  
          <h3 className="text-indigo-400 md:text-xl mb-4">
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
            <a href="#artworks" className="underline font-bold">
              Drawing
            </a>
            . I enjoy building{" "}
            <a href="#projects" className="underline font-bold">
              Projects
            </a>
            , and I'm currently diving deep into web development. Let's{" "}
            <a href="#contact" className="underline font-bold">
              Connect
            </a>{" "}
            and create something amazing!
          </p>
        </div>
  
      </div> {/* end of flex row */}
      
    </div>
  </div>
  
  );
}
