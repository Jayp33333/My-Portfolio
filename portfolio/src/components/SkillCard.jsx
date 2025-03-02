import React from 'react'

const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <div className='bg-white rounded-2xl border border-[#fce8d4] p-2 flex items-center justify-center '>
      <div className='flex gap-1'>
        <div className='w-10 h-10 flex items-center justify-center rounded-[7px]'>{icon}</div>
          <div className='flex items-center justify-between'>
            <p className='text-[13px] text-[#E5ECF6] font-medium'>{skillName}</p>
         </div>
       </div>
    </div>
  )
}

export default SkillCard