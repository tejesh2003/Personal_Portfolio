import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <AchievementCard title="Solved over 700+ problems across various coding platforms. " />
          <AchievementCard title="AWSCloud Practioner Essentials certification from AWS." link="https://drive.google.com/file/d/1Fg9AiSRs6MofR-4JVp0nlbwbjoakiUfh/view"/>
          <AchievementCard title="Completed Software Engineering Virtual Intern at JPMorgan Chase & Co" link="https://drive.google.com/file/d/1Gcn4Z-oOv4YoFc2isKlLYmX2309NTrwb/view"/>
          <AchievementCard title="5-star badge on HackerRank for C++." link="https://www.hackerrank.com/profile/tejeshchintada22"/>
          <AchievementCard title="Ranked as a 3-star coder on CodeChef." />
          <AchievementCard title='Completed the "6 Companies 30 Days Challenge" by Arsh Goyal' link="https://github.com/tejesh2003/-6Companies30Days-Challenge."/>
          <AchievementCard title="Achieved a 97.5 percentile in JEE Mains and secured an All India Rank (AIR) of 12,000 in JEE Advanced." />

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
