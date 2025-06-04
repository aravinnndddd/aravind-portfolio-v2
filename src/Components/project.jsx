import { img } from "framer-motion/client";
import { Link2Icon, LinkIcon, MoveDown, MoveRight, MoveUp } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";

export const Project = () => {
  const projects = [
    { id: 6, title: "Advyka'25",img: "/assets/proj6.png",dis:"I contributed to the frontend development of the Advyka 2025 techfest website, focusing on creating a user-friendly, responsive interface. The site provided event details, schedules, and speaker info, enhancing the overall attendee experience. This project strengthened my skills in web development and UX/UI design.",link:"https://advyka.in/"  }
  //  ,
  //   { id: 2, title: "Popzzmedia",img: "/assets/proj2.png",dis:"PopzzMedia is a premium landing page for an online course, crafted to drive engagement and conversions. With a bold design, a persuasive headline, a demo video, and a countdown timer, it delivers a high-energy user experience optimized for action.",link:"https://popzzmedia.com/"  }
    ,
    { id: 1, title: "CineBox",img: "/assets/proj1.png",dis:"CineBox is an app that lets users search for movies or TV series by name. Once you search for a movie or series, the app provides a list of results based on your query. Whether you're looking for a specific title or just browsing, CineBox makes it easy to discover and explore a wide range of movies and shows.",link:"https://movieland-chi-indol.vercel.app/" },
    { id: 3, title: "Tic-Tac-Toe",img: "/assets/proj3.png",dis:"This is a clean, offline two-player Tic Tac Toe game built for pure, old-school fun — no internet, no distractions, just you and your opponent battling it out in a classic game of strategy! The UI is simple yet stylish, making it easy for both players to jump in, mark their moves (X or O), and race to get three in a row — vertically, horizontally, or diagonally.",link:"https://tictactoe-one-flax.vercel.app/"  },
    { id: 4, title: "Todo App",img: "/assets/proj4.png",dis:"This is a clean and minimalistic To-Do app designed for pure productivity without the clutter.With a simple, intuitive UI, you can easily add, view, and manage your daily tasks — no complicated features, no overwhelming screens. Just the essentials, right where you need them.",link:"https://todo-murex-iota.vercel.app/"  },
    { id: 5, title: "Calculator",img: "/assets/proj5.png",dis:"A lightweight calculator offering essential arithmetic operations with clean Light and Dark themes for optimal user comfort.",link:"https://aravinnndddd.github.io/calculator/"  }
    ,
  ];

  const translateYValues = ["7vh", "5.8vh", "4.5vh", "3vh", "1.5vh", ".2vh"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };
  const handleprevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  return (
    <div id="projects" className="flex flex-col  h-[100vh] m-5  border-b-2 border-neutral-500">
      <h1 className="text-white mx-auto font-bold text-4xl border-b-2 border-blue-500 w-fit p-[10px] mt-[10vh]">
        Projects
      </h1>

      <div className="flex  justify-center ">
        {projects.map((project, index) => {
          // Calculate stacking order
          const zIndex = projects.length - index;
          // Check if this is the current active card
          const isActive = index === currentIndex;

          return (
            <div
             
              key={project.id}
              className={`flex md:flex-col w-[95%]  justify-center absolute h-[60vh] md:h-[55vh] md:w-[70%]
                shadow-md  bg-black shadow-black/100  rounded-lg
                transition-all duration-500 ease-in-out border-l-4 border-gray-600`}
              style={{
                transform: `translateY(${translateYValues[index] || "0vh"}) ${
                  isActive ? "scale(1)" : "scale(0.95)"
                }`,
                zIndex: isActive ? 50 : zIndex,
                opacity: isActive ? 1 : 0.7,
              }}
            >
              

              {/* Project Title */}
              <h1 className="text-white md:relative md:top-[25px] absolute text-center text-2xl top-[30px] font-extrabold ">
                {project.title}
              </h1>
                <div className="flex md:flex-row flex-col  items-center h-full w-full gap-5 mx-5">
               
                <a className="md:w-[40%]" href={project.link} target="_blank"><img  className="md:grayscale md:hover:grayscale-0 hover:scale-105 transition-all ease duration-500 rounded-lg md:w-[100%] flex md:flex-col md:h-[40vh] h-[30vh]  mt-[10vh] md:mt-[10px]" src={project.img} alt="proj"/></a>
                <div className="flex flex-col  md:w-[50%] md:text-xl text-[12px] w-[100%] font-semibold text-white">
                  {project.dis}
               
                
                </div>
               
                </div>
               {/* Colored Dots */}
              <div  className="absolute md:top-[25px] md:left-[25px] top-[15px] items-center left-[15px] flex gap-2 w-fit h-[30px]">
                <div
                  onClick={handleNextProject}
                  className="bg-red-500 md:w-8 md:h-8 h-6 w-6 rounded-full  cursor-pointer items-center flex justify-center"
                ><MoveUp size={15}/></div>
                <span  className="bg-yellow-500 md:w-8 md:h-8 h-6 w-6 rounded-full flex items-center justify-center"><a href={project.link} target="_blank"><Link2Icon size={15}/></a></span>
                <div onClick={handleprevProject} className="bg-green-500 md:w-8 md:h-8 h-6 w-6 items-center cursor-pointer justify-center rounded-full flex"><MoveDown size={15}/></div>
              </div>
              </div>
             
            
          );
          
        })}
  
      </div>
      <div className="relative flex top-[75vh] justify-center md:justify-normal md:flex md:top-[20vh] md:left-10">
         <div  className="md:flex-col flex gap-2  w-fit ">
                <div
                  className="bg-red-500 md:w-8 md:h-8 h-6 w-6 rounded-full  cursor-pointer items-center flex justify-center"
                ><MoveUp size={15}/> </div><p className="text-red-500">Next</p>
                <span  className="bg-yellow-500 md:w-8 md:h-8 h-6 w-6 rounded-full flex items-center justify-center"><Link2Icon size={15}/></span><p className="text-yellow-500">Link</p>
                <div  className="bg-green-500 md:w-8 md:h-8 h-6 w-6 items-center cursor-pointer justify-center rounded-full flex"><MoveDown size={15}/></div><p className="text-green-500">Back</p>
              </div>
      </div>
           
    </div>
  );
};
