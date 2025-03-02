import React from 'react'

const ContactInfoCard = ({icon, text}) => {
  return (
    <div className='flex items-center gap-5 bg-[] rounded  px-4 py-3 mb-5'>
      <div className='w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-lg'>{icon}</div>
      <p className='text-[white] text-xs md:text-sm'>{text}</p>
    </div>
  )
}

export default ContactInfoCard