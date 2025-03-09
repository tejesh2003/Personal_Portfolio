import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard"; // Import ProfileCard

const Profiles = () => {
  // Resume Links
  const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=119JT3B5HfrWtxGKLqIoKawlRvSxRUM-w";
  const resumeViewLink = "https://drive.google.com/file/d/119JT3B5HfrWtxGKLqIoKawlRvSxRUM-w/view?usp=sharing";

  // Function to handle resume download
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeDownloadLink;
    link.download = "Tejesh_Resume.pdf"; // Custom filename
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left Section: Timeline and Profile Cards */}
      <div className="w-full lgl:w-3/12">
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ProfileCard title="GitHub" link="https://github.com/tejesh2003" />
          <ProfileCard title="LinkedIn" link="https://www.linkedin.com/in/tejesh-chintada/" />
          <ProfileCard title="LeetCode" link="https://leetcode.com/u/Tejesh_2003/" />
          <ProfileCard title="GFG" link="https://www.geeksforgeeks.org/user/tejeshchintada22/" />
          <ProfileCard title="CodeChef" link="https://www.codechef.com/users/tejesh_22" />
        </div>
      </div>

      {/* Right Section: Resume Download & View Buttons */}
      <div className="w-full lgl:w-9/12 flex justify-center items-center">
        <div className="w-4/5 h-[70%] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg flex flex-col justify-center items-center shadow-shadowOne gap-4">
          
          {/* Download Resume Button */}
          <button
            onClick={downloadResume}
            className="border-[1px] border-solid border-designColor text-designColor bg-transparent px-6 py-3 rounded-lg hover:bg-designColor hover:text-white transition duration-300"
          >
            Download Resume
          </button>

          {/* View Resume Button */}
          <a
            href={resumeViewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-[1px] border-solid border-designColor text-designColor bg-transparent px-6 py-3 rounded-lg hover:bg-designColor hover:text-white transition duration-300 text-center"
          >
            View Resume
          </a>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Profiles;
