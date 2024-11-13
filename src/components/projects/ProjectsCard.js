import React, { useState } from 'react';
import { BsGithub } from "react-icons/bs";  // Importing GitHub icon
import { FiArrowDown, FiArrowUp } from "react-icons/fi";  // Importing Down and Up arrows from react-icons
import { motion } from 'framer-motion';  // Import motion from Framer Motion

const ProjectsCard = ({ title, shortDes, fullDes, githubLink, techStack }) => {
  const [showFullDes, setShowFullDes] = useState(false); // State to toggle between shortDes and fullDes

  const handleClick = () => {
    setShowFullDes(prevState => !prevState); // Toggle between showing shortDes and fullDes
  };

  return (
    <div className="w-72 h-96 p-4 xl:px-8 rounded-lg shadow-lg flex flex-col bg-black bg-opacity-20 hover:bg-opacity-30 transition-colors duration-300 relative">
      <div className="w-full flex flex-col gap-4 h-full">
        {/* Render title and GitHub icon only if fullDes is not shown */}
        {!showFullDes && (
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-designColor capitalize">{title}</h3>
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-designColor transition-colors"
            >
              <BsGithub className="text-xl" />
            </a>
          </div>
        )}

        {/* Toggleable Content with Motion for smooth transition */}
        <motion.div 
          className="text-sm text-gray-300 tracking-wide mt-2 flex-grow"
          key={showFullDes ? 'full' : 'short'} // Adding key for animating content swap
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }} // Duration for the transition effect
        >
          {showFullDes ? (
            fullDes.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))
          ) : (
            shortDes
          )}
        </motion.div>

        {/* Technologies Section on front side only */}
        {!showFullDes && techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-3">
            {techStack.map((tech, index) => (
              <span key={index} className="text-xs bg-gray-800 text-white px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Toggle Button with Down/Up Arrow */}
      <button 
        onClick={handleClick}
        className="absolute bottom-4 right-4 text-xl text-gray-400 hover:text-designColor transition-colors"
      >
        {showFullDes ? <FiArrowUp /> : <FiArrowDown />}
      </button>
    </div>
  );
};

export default ProjectsCard;
