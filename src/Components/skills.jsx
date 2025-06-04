import React, { useState } from "react";
import {
  Code,
  FileCode,
  Braces,
  GitBranch,
  Github,
  Atom,
  Globe,
  Pencil,
  Brain,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const skillIcons = [
  { name: "HTML", icon: <FileCode /> },
  { name: "CSS", icon: <Braces /> },
  { name: "JavaScript", icon: <Code /> },
  {
    name: "Tailwind",
    icon: (
      <img
        src="https://www.svgrepo.com/show/374118/tailwind.svg"
        alt="Tailwind"
        className="w-5 h-5"
      />
    ),
  },
  { name: "Git", icon: <GitBranch /> },
  { name: "GitHub", icon: <Github /> },
  {
    name: "VS Code",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        alt="VS Code"
        className="w-5 h-5"
      />
    ),
  },
  { name: "Express.js", icon: <span className="text-xs font-mono">Ex</span> },
  {
    name: "Node.js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        className="w-5 h-5"
      />
    ),
  },
  { name: "React", icon: <Atom /> },
  {
    name: "Python",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-5 h-5"
      />
    ),
  },
  {
    name: "C",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        alt="C"
        className="w-5 h-5"
      />
    ),
  },
  {
    name: "Bootstrap",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        alt="Bootstrap"
        className="w-5 h-5"
      />
    ),
  },
  {
    name: "Postman",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
        alt="Postman"
        className="w-5 h-5"
      />
    ),
  },
];

const getSkillIcon = (name) => {
  const skill = skillIcons.find((s) => s.name === name);
  return skill ? skill.icon : <Code />;
};

const SkillNode = ({ label, children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="ml-4 my-2  ">
      <div
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer mb-5 text-lg font-semibold ml-7 text-white hover:text-blue-500 transition"
      >
        {expanded ? "📂" : "📁"} {label}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-8 md:ml-12 text-slate-300 md:list-none md:flex md:flex-wrap md:gap-7"
          >
            {children.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-blue-300 cursor-pointer md:hover:bg-gray-700 md:bg-gray-800 rounded md:transition px-4 py-2 w-[160px] my-[2px]"
              >
                {getSkillIcon(item)}
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      label: "Languages",
      children: ["HTML", "JavaScript", "Python", "C"],
    },
    {
      label: "Frameworks",
      children: ["React", "Tailwind", "CSS", "Bootstrap" /*,"Express.js"*/],
    },
    {
      label: "Tools",
      children: ["Git", "GitHub", "VS Code" /*,"Postman"*/],
    },
  ];

  return (
    <div
      id="skills"
      className="flex flex-col h-[180vh] md:h-[120vh]  m-5 border-b-2 border-neutral-500"
    >
      <div className="flex flex-col mb-10">
        <h2 className="text-3xl font-bold text-white  p-6">What I Do</h2>
        <div className="flex md:flex-row flex-col mb-2  w-full md:h-[35vh] gap-3">
          <div className="flex flex-col items-center p-8 shadow-inner shadow-white/20 bg-white/10 rounded md:w-[33%] ">
            <Globe color="purple" size={30} />
            <h1 className="text-2xl text-white font-extrabold">
              Web Development
            </h1>{" "}
            <br />
            <p className="text-md text-white font-semibold">
              I build modern, responsive websites that turn your ideas into
              reality. From intuitive user interfaces to seamless user
              experiences, I craft web solutions that are as beautiful as they
              are functional.
            </p>
          </div>
          <div className="flex flex-col  items-center p-8 shadow-inner shadow-white/20 bg-white/10 rounded md:w-[33%] ">
            <Pencil color="purple" size={30} />
            <h1 className="text-2xl text-white font-extrabold">
              Commissioned Art
            </h1>{" "}
            <br />
            <p className="text-md text-white font-semibold">
              Outside of code, I create hand-drawn pencil sketches on
              commission. From realistic portraits to imaginative concepts
            </p>
          </div>
          <div className="flex flex-col  items-center p-8 shadow-inner shadow-white/20 bg-white/10 rounded md:w-[33%] ">
            <Brain color="purple" size={30} />
            <h1 className="text-2xl text-white font-extrabold">
              {" "}
              Always Learning
            </h1>{" "}
            <br />
            <p className="text-md text-white font-semibold">
              Tech never stands still, and neither do I. I’m constantly learning
              new tools, frameworks, design trends, and creative techniques.
              Whether it’s leveling up my frontend game or exploring new
              artistic styles.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-white border-b-2 w-[220px] border-neutral-500 ">
          Technologies I Use
        </h2>
        {skillsData.map((group, index) => (
          <SkillNode
            key={index}
            label={group.label}
            children={group.children}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
