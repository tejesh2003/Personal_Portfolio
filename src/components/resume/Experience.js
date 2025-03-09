import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[auto] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="at Emoha"
            result="Dec 2024 - present"
            des="A Software Engineer Intern supports software development by writing code and contributing to real-world projects, gaining hands-on experience in programming and development practices."
          />
        </div>
      </div>

      
    </motion.div>
  );
};

export default Experience;
