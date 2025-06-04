import React, { useState } from "react";
import axios from "axios";
import { DcStatus } from "./dcStatus";
import { Instagram, LinkedinIcon, Mail } from "lucide-react";
// import MoonViewer from './models';
import style from './style.module.css'
const DiscordLogo = ({ color = "#ffffff", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -28.5 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path
            d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
            fill={color}
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
};
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiries: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await axios.post("https://your-backend-url.com/feedback", {
        name: formData.name,
        feedback: formData.enquiries,
      });

      console.log("Submitted successfully:", res.data);
      alert("Thank you for your feedback!");

      // Clear the form after submit
      setFormData({
        name: "",
        email: "",
        enquiries: "",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Error submitting feedback. Please try again!");
    }
  };

  return (
    <div id="contact" className="h-[100vh] border-b-2 border-neutral-500 mt-[10vh] flex  justify-center ">
      <h1 className="text-center absolute font-bold text-3xl mt-3  text-white">
        Contact Me
      </h1>
      <div className="shadow-lg p-10 shadow-cyan-500/45 ring-2 ring-white md:h-[70vh] md:w-[90%] w-[90%] md:flex h-[90vh] rounded text-white  ">
        <div className="h-[40vh] md:h-[60vh] md:w-[50%] w-[100%] flex flex-col justify-center items-center my-8 md:my-0">
          <DcStatus />
        </div>
       
    <div className="flex  flex-col md:w-[50%] gap-3  w-[100%] h-[60vh] items-center md:justify-center">
    <a className={`${style.main}  bg-black ring-1 rounded-lg flex pl-10 items-center h-[5vh] w-[80%]`}  href="https://discord.com/users/754961569858846770" target="_blank" rel="noopener noreferrer">
    Sent me a Hi
          <div className={`${style.icon} absolute`}>
          <DiscordLogo/>
          </div>
        </a>
        <a className={`${style.main}  bg-black ring-1 rounded-lg flex pl-10 items-center h-[5vh] w-[80%]`}  href="mailto:aravinnndddd73@gmail.com" target="_blank" rel="noopener noreferrer">
        Sent me a Mail
        <div className={`${style.icon} absolute`}>
          <Mail color='white'/>
          </div>
        </a>
        <a className={`${style.main}  bg-black ring-1 rounded-lg flex pl-10 items-center h-[5vh] w-[80%]`}  href="https://www.linkedin.com/in/aravind-p-832849331/" target="_blank" rel="noopener noreferrer">
        Connect with me
        <div className={`${style.icon} absolute`}>
          <LinkedinIcon color='white'/>
          </div>
        </a>
         <a className={`${style.main}  bg-black ring-1 rounded-lg flex pl-10 items-center h-[5vh] w-[80%]`}  href="https://www.instagram.com/aravinnndddd/" target="_blank" rel="noopener noreferrer">
        Sent me a Hi
        <div className={`${style.icon} absolute`}>
          <Instagram color='white'/>
          </div>
        </a>
    </div>
     
        
      </div>
    </div>
  );
};
{
  /* <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center mx-1 md:my-[12vh] mt-[20px]'>
          
          <fieldset><legend>Name:</legend>
          <input type="text" placeholder='Your name' name='name' value={formData.name} onChange={handleChange} className='ring-2 ring-blue-500 w-[90%] md:w-[300px] md:h-[5vh] px-2 rounded bg-white/20' /></fieldset>

          <fieldset><legend>Email:</legend>
          <input type="email" placeholder='example@gmail.com' name='email' value={formData.email} onChange={handleChange} className='ring-2 ring-blue-500 w-[90%] md:w-[100%] px-2 md:h-[5vh] rounded bg-white/20' /></fieldset>

          <fieldset><legend>Enquiry:</legend>
          <textarea name="enquiries" value={formData.enquiries} onChange={handleChange} className='ring-2 ring-blue-500 w-[90%] md:w-[100%] md:h-[15vh] rounded bg-white/20'></textarea></fieldset>

          <div className='flex justify-end w-[100%]'>
            <button type="submit" className='w-[100px] px-2 mx-auto md:h-[5vh] rounded bg-white/20 ring-2 ring-blue-500'>
              Submit
            </button>
          </div>
          
        </form> */
}

{
  /* 
        <MoonViewer /> */
}
