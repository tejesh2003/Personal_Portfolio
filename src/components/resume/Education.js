import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech-Computer Science"
            subTitle="Indian Institute of Information Technology Nagpur (2021-present)"
            result="7.84/10"
            des="Completed a comprehensive Bachelor's degree in Computer Science, gaining strong foundations in data structures, algorithms, software development, and web technologies."
          />
          <ResumeCard
            title="XII-Science"
            subTitle="Sri Chaitanya Jr College (2019 - 2021)"
            result="96%"
            des="Completed 12th grade with a focus on Mathematics, Physics, and Chemistry (MPC) under the Andhra Pradesh State Board, developing strong analytical and problem-solving skills."
          />
          <ResumeCard
            title="X"
            subTitle="Sri Chaitanya School (2018 - 2019)"
            result="10/10"
            des="Completed 10th grade under the Andhra Pradesh State Board, building a strong foundation in core subjects with a focus on academic excellence and holistic development."
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
};

export default Education;
