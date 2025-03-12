import React from 'react'
import PROFILE_PIC from '../assets/images/my-pic.png';
import {SOCIAL_MEDIA_ACCOUNT} from '../utils/data.js'
import StatInfoCard from '../components/StatInfoCard.jsx';

const Hero = () => {
  return (
    <section id='hero' className='container mx-auto px-8'>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px] '>
        <div className='order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0'>

          <h2 className='text-2xl lg:text-3xl font-medium text-[white]'>Hi, I'm John Paul Jamito</h2>

          <p className='w-full lg:w-[500px] text-sm lg:text-base mt-4 text-[white]'>
          IT Student | PUP Lopez
          </p>

          <h1 className='w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent'>Your Friendly Neighborhood Tech Enthusiast</h1>

          
          <p className='w-full lg:w-[500px] text-sm lg:text-base mt-2 text-[white]'>
          Passionate about technology, coding, and building user-friendly web experiences. Always learning, always creating!
        </p>


          <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
            <button className='flex-1 md:flex-none action-btn-outline btn-scale-anim'>View My Work</button>
            <button className='flex-1 md:flex-none action-btn btn-scale-anim'>Download Resume</button>
          </div>

        </div>

        <div className='w-[300px] md:w-[370px] h-[350px] md:h-[400px] border border-white bg-inherit rounded-3xl relative order-1 lg:order-2'>
          <img src={PROFILE_PIC} alt="Profile Picture" className='profile-pic' />
        </div>
      </div>

      {/* Social Media Account */}
      <div className='flex gap-12 mt-16 md:mt-24 flex-wrap'>
        {SOCIAL_MEDIA_ACCOUNT.map((item) => (
          <StatInfoCard key={item.id} label={item.label} icon={item.icon} link={item.link} />
        ))}
      </div>
    </section>
  )
}

export default Hero