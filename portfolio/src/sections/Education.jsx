import React from 'react'
import TimelineCard from '../components/TimelineCard'
import { EDUCATION_TIMELINE } from '../utils/data.js'

const Education = () => {
  return (
    <section id='education' className='  sm:mt-32'>
      <div className='container mx-auto px-16 lg:px-64
      py-10'>
        <div className='w-full lg:w-[60vw] mx-auto mb-28'>
          <h4 className='section-title lg:text-4xl '>Education Timeline</h4>
        </div>

        <div className='#'>
            {EDUCATION_TIMELINE.map((timeline) => (
              <TimelineCard
                key={timeline.id}
                title={timeline.title}
                institution={timeline.institution}
                date={timeline.duration}
                description={timeline.description}
              />
            ))}
        </div>

      </div>
    </section>
  )
}

export default Education