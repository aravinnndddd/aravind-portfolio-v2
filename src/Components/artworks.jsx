import work1 from "/assets/work2.png";
import work2 from "/assets/work3.png";
import work3 from "/assets/work4.png";
import work4 from "/assets/work5.png";
import work5 from "/assets/work6.png";
import work6 from "/assets/work7.png";
import work7 from "/assets/work8.png";
import work8 from "/assets/work1.png";
import work9 from "/assets/work10.jpg";
import work10 from "/assets/work11.jpeg";
import work11 from "/assets/work13.jpeg";
import work12 from "/assets/work14.jpeg";
import Marquee from "react-fast-marquee";
import { div } from "framer-motion/client";
export const Artworks = () => {
  return (
    <Marquee pauseOnHover speed={30}>
      {[
        work1,
        work2,
        work3,
        work4,
        work5,
        work6,
        work7,
        work8,
        work9,
        work10,
        work11,
        work12,
      ].map((logo, index) => (
        <div className="h-[45vh] border-b-2 border-t-2 border-neutral-500 flex items-center">
          <img
            key={index}
            src={logo}
            alt="logo"
            className="h-[25vh] m-5  hover:scale-150 transition-all ease duration-300 rounded-[10px]"
          />
        </div>
      ))}
    </Marquee>
  );
};
