import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Profiles from './Profiles';
import Achievement from './Achievement';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
   const [ProfileData, setProfileData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setProfileData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setProfileData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setProfileData(true) &
              setAchievementData(false)
            }
            className={`${
              ProfileData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Profiles
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setProfileData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
          
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {ProfileData && <Profiles />}
      {achievementData && <Achievement />}
    </section>
  );
}

export default Resume