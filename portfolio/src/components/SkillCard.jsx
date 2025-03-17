import React from 'react'

const SkillCard = ({ icon, skillName}) => {
  return (
    <div className='bg-white rounded-2xl border border-[#fce8d4] p-2 flex items-center justify-center '>
      <div className='flex gap-1'>
        <div className='w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center rounded-[7px]'>{icon}</div>
          <div className='flex items-center justify-between pr-2'>
            <p className='text-[10px] sm:text-[13px] text-[#E5ECF6] font-medium'>{skillName}</p>
         </div>
       </div>
    </div>
  )
}

export default SkillCard