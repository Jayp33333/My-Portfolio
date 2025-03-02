import React from 'react';
import { ABOUT_ME } from '../utils/data.js';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section id='about' className='container mx-auto px-8 py-16 flex flex-col items-center justify-center text-center'>
      {/* Mobile "About Me" title with animation from top */}
      <h4 
        className={`block lg:hidden w-[200px] section-title mb-8 transition-all duration-700 ease-out transform ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        About Me
      </h4>

      <div ref={textRef} className='w-full max-w-2xl'>
        {/* Desktop "About Me" title with animation from top */}
        <h4 
          className={`hidden lg:block lg:text-4xl w-[200px] section-title mx-auto transition-all duration-700 ease-out transform ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          About Me
        </h4>

        {/* Content with animation from bottom */}
        <p 
          className={`text-sm leading-6 whitespace-pre-line mt-4 text-[white] lg:text-xl transition-all duration-700 ease-out transform ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {ABOUT_ME.content}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
