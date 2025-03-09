import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiBootstrap, SiAntdesign, SiJirasoftware, SiPython, SiCplusplus, SiMysql, SiPostman } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";

const Skills = () => {
  const frontendSkills = [
    { icon: FaHtml5, color: "text-orange-600", name: "HTML" },
    { icon: FaCss3Alt, color: "text-blue-500", name: "CSS" },
    { icon: FaJsSquare, color: "text-yellow-400", name: "JavaScript" },
    { icon: FaReact, color: "text-blue-400", name: "React" },
    { icon: SiRedux, color: "text-purple-500", name: "Redux" },
    { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
    { icon: SiBootstrap, color: "text-purple-600", name: "Bootstrap" },
    { icon: SiAntdesign, color: "text-blue-500", name: "Ant Design" },
  ];

  const backendSkills = [
    { icon: FaNodeJs, color: "text-green-600", name: "Node.js" },
    { icon: SiExpress, color: "text-gray-300", name: "Express.js" },
    { icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
    { icon: SiMysql, color: "text-blue-400", name: "MySQL" },
  ];

  const toolsTech = [
    { icon: FaGitAlt, color: "text-red-500", name: "Git" },
    { icon: SiJirasoftware, color: "text-blue-600", name: "Jira" },
    { icon: SiCplusplus, color: "text-blue-500", name: "C++" },
    { icon: SiPython, color: "text-yellow-500", name: "Python" },
    { icon: BsGraphUpArrow, color: "text-white", name: "DSA" },
    { icon: SiPostman, color: "text-orange-500", name: "Postman" },
    { icon: FaAws, color: "text-yellow-600", name: "AWS" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col justify-center items-center py-8 gap-6"
    >
      {/* Web Dev Section */}
      <div className="md:w-3/5 w-full flex flex-col justify-center gap-6">
        <div className="bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg pt-4 pb-6 px-6 flex flex-col justify-center items-center shadow-shadowOne">
          <h3 className="text-white text-lg font-semibold border-b border-gray-600 pb-2">WEB DEV</h3>

          {/* FRONTEND */}
          <div className="w-full mt-3">
            <h4 className="text-white text-md font-semibold pb-2 uppercase">FRONTEND</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {frontendSkills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-3 border border-gray-500 rounded-lg px-4 py-2 w-auto
                  hover:shadow-md hover:shadow-red-500 transition duration-300 cursor-pointer"
                >
                  <skill.icon className={`w-6 h-6 md:w-8 md:h-8 ${skill.color}`} />
                  <span className="text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="w-full mt-6">
            <h4 className="text-white text-md font-semibold pb-2 uppercase">BACKEND</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {backendSkills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-3 border border-gray-500 rounded-lg px-4 py-2 w-auto
                  hover:shadow-md hover:shadow-red-500 transition duration-300 cursor-pointer"
                >
                  <skill.icon className={`w-6 h-6 md:w-8 md:h-8 ${skill.color}`} />
                  <span className="text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Technologies Section */}
      <div className="md:w-3/5 w-full flex justify-center">
        <div className="bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg pt-4 pb-6 px-6 flex flex-col justify-center items-center shadow-shadowOne w-full">
          <h3 className="text-white text-lg font-semibold border-b border-gray-600 pb-2">TOOLS & TECHNOLOGIES</h3>
          <div className="flex flex-wrap gap-3 justify-center mt-3">
            {toolsTech.map((skill, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-3 border border-gray-500 rounded-lg px-4 py-2 w-auto
                hover:shadow-md hover:shadow-red-500 transition duration-300 cursor-pointer"
              >
                <skill.icon className={`w-6 h-6 md:w-8 md:h-8 ${skill.color}`} />
                <span className="text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
