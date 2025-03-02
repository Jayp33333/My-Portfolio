import React, {useState} from 'react';
import { SKILL_TABS, SKILLS } from '../utils/data.js';
import Tabs from '../components/Tabs.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { motion }from 'framer-motion';

const TechnicalProficiency = () => {

  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState('all');

  const handleTabValueChange = (value) => {
    if (value === "all") {
      setTabData(SKILLS);
    } else {
      const updatedList = SKILLS.filter((skill) => skill.type === value);
      setTabData(updatedList);
    }
    setActiveTab(value);
  }

  return (
    <section id='skills' className=' mt-20'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title lg:text-4xl'>Technical Proficiency</h4>
        </div>
      

      <Tabs
        tabList={SKILL_TABS}
        activeTab={activeTab}
        onChange={handleTabValueChange}
      />
       <div className='container mx-auto px-10 lg:px-24 flex flex-wrap gap-4 items-center justify-center'>
          {tabData.map((skill, index) => (
            <motion.div key={skill.id}
              initial={{ opacity: 0, y: 20}}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: 0.4, delay: index * 0.1}}
            >
              <SkillCard 
                icon={<skill.icon className='w-6 h-6 text-primary' />}
                skillName={skill.skill}
                description={skill.description}
                progress={skill.progress}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalProficiency