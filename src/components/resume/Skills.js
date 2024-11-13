import React from 'react';
import { motion } from 'framer-motion';

// Importing Font Awesome (FA) and Simple Icons (SI) from react-icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { TbBinaryTree } from 'react-icons/tb';
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex justify-center items-center py-12"
    >
      {/* Background container with a defined height and padding */}
      <div className="w-3/5 h-[70%] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg py-12 px-8 flex flex-col justify-center items-center shadow-shadowOne">
        
        {/* Top Section: 4 icons */}
        <div className="w-full h-1/2 grid grid-cols-4 gap-6 text-white">
          <FaHtml5 className="w-16 h-16 md:w-20 md:h-20 text-orange-600" title="HTML5" />
          <FaCss3Alt className="w-16 h-16 md:w-20 md:h-20 text-blue-500" title="CSS3" />
          <FaJsSquare className="w-16 h-16 md:w-20 md:h-20 text-yellow-400" title="JavaScript" />
          <FaReact className="w-16 h-16 md:w-20 md:h-20 text-blue-400" title="React" />
        </div>

        {/* Bottom Section: 5 icons */}
        <div className="w-full h-1/2 grid grid-cols-5 gap-6 text-white mt-6">
          <SiExpress className="w-16 h-16 md:w-20 md:h-20 text-gray-300" title="Express.js" />
          <FaNodeJs className="w-16 h-16 md:w-20 md:h-20 text-green-600" title="Node.js" />
          <SiMongodb className="w-16 h-16 md:w-20 md:h-20 text-green-500" title="MongoDB" />
          <FaAws className="w-16 h-16 md:w-20 md:h-20 text-orange-500" title="AWS" />
          <TbBinaryTree className="w-16 h-16 md:w-20 md:h-20 text-white" title="DSA" />
        </div>

      </div>
    </motion.div>
  );
};

export default Skills;
