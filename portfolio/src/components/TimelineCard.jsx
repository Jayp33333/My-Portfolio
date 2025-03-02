import React from 'react'

const TimelineCard = ({title, institution, date, description}) => {
  return (
    <div className='container mx-auto  border-l-4 border-primary relative'>
      <div className='absolute -left-[18px] top-0'>
        <div className='rounded-full bg-primary w-[30px] h-[30px] flex items-center justify-center'>
        <div className='rounded-full bg-white w-[10px] h-[10px]'></div>
        </div>
      </div>
      <div className='flex pb-10 pl-10 '>
        <div className=''>
          <h3 className='text-[20px] text-[white] font-medium'>{title}</h3>
          <p className='text-[14px] text-[gray]'>{institution}</p>
          <p className='text-[14px] text-primary font-semibold'>{date}</p>
          {/* <p className='text-[16px] text-[#9CA3AF]' >{description}</p> */}
        </div>
      </div>
    </div>
  )
}

export default TimelineCard