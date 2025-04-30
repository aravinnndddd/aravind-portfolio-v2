import React, { useState } from "react";
import {
  Code,
  FileCode,
  Braces,
  GitBranch,
  Github,
  Atom,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const skillIcons = [
  { name: "HTML", icon: <FileCode /> },
  { name: "CSS", icon: <Braces /> },
  { name: "JavaScript", icon: <Code /> },
  { name: "Tailwind", icon: <img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind" className="w-5 h-5" /> },
  { name: "Git", icon: <GitBranch /> },
  { name: "GitHub", icon: <Github /> },
  { name: "VS Code", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-5 h-5" /> },
  { name: "Express.js", icon: <span className="text-xs font-mono">Ex</span> },
  { name: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-5 h-5" /> },
  { name: "React", icon: <Atom /> },
  { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5" /> },
  { name: "C", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-5 h-5" /> },
  { name: "Bootstrap", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-5 h-5" /> },
  { name: "Postman", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="w-5 h-5" /> },
];

const getSkillIcon = (name) => {
  const skill = skillIcons.find((s) => s.name === name);
  return skill ? skill.icon : <Code />;
};

const SkillNode = ({ label, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="ml-4 my-2">
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
            className="ml-12 text-slate-300 md:list-none md:flex md:flex-wrap md:gap-7"
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
      children: ["React", "Tailwind", "Express.js", "CSS", "Bootstrap"],
    },
    {
      label: "Tools",
      children: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  return (
    <div id="skills" className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto rounded-xl shadow-xl p-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Skills
        </h2>
        {skillsData.map((group, index) => (
          <SkillNode key={index} label={group.label} children={group.children} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
