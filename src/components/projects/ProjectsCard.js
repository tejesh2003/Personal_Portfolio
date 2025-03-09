import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsCard = ({ title, shortDes, fullDes, githubLink, techStack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Ensure no scrolling on entire page
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Project Card */}
      <motion.div
        className="w-72 h-70 p-4 rounded-lg shadow-md bg-black bg-opacity-20 
        hover:bg-opacity-30 hover:shadow-lg hover:shadow-red-500 transition-all 
        duration-300 cursor-pointer flex flex-col justify-between relative 
        transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Title and GitHub Icon */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-designColor capitalize">
              {title}
            </h3>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-designColor transition"
              onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking GitHub
            >
              <BsGithub className="text-xl" />
            </a>
          </div>

          {/* Short Description */}
          <p className="text-sm text-gray-300 tracking-wide mb-3">{shortDes}</p>
        </div>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {techStack.map((tech, index) => (
              <span key={index} className="text-xs bg-gray-800 text-white px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)} // Close modal when clicking outside
          >
            {/* Larger Modal Content */}
            <motion.div
              className="bg-gray-900 p-6 rounded-lg w-[90%] max-w-3xl text-white relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent background clicks from closing modal
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-4 text-xl text-gray-400 hover:text-red-500 transition"
              >
                ✖
              </button>

              {/* Modal Title */}
              <h2 className="text-2xl font-bold mb-4">{title}</h2>

              {/* Full Description */}
              <div className="text-base text-gray-300 leading-relaxed">
                {fullDes.split("\n").map((line, index) => (
                  <p key={index} className="mb-2">{line}</p>
                ))}
              </div>

              {/* Tech Stack */}
              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {techStack.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-800 text-white px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsCard;
