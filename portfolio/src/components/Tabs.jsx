import React from 'react'
import { motion }from 'framer-motion';

const Tabs = ({tabList, activeTab, onChange}) => {

  const getActiveStyles = (value) => {
    return activeTab === value
    ? "text-white bg-gradient-primary" 
    :  "text-[white] bg-transparent";
  }

  return (
    <div className='flex items-center justify-center my-10'>
      <div className=' rounded-full flex text-[white]'>
        {tabList.map((Tabs) => (
          <motion.button 
          key={Tabs.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: activeTab === Tabs.value ? 1 : 0.8,
            scale: activeTab === Tabs.value? 1.05 : 1,
          }}
          transition = {{ duration: 0.2 }}
          className={`text-xs md:text-[15px] ${getActiveStyles(Tabs.value)} rounded-full px-4 md:px-10 py-[6px] md:py-3`}
          onClick={() => onChange(Tabs.value)}
          >
            {Tabs.label}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default Tabs