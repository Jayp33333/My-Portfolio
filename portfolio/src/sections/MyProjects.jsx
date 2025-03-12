import React, {useEffect, useState, useCallback} from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { IoIosArrowForward } from 'react-icons/io'
import { PROJECTS } from '../utils/data.js'
import ProjectCard from '../components/ProjectCard.jsx'

const MyProjects = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);

  return (
    <section id='projects' className=' mt-14'>
      <div className='container mx-auto px-8 md:px-10 py-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>Sample Projects</h4>

        </div>

        <div className='relative'>
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex pt-14 pb-8'>
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]'
                >
                  <ProjectCard
                    key={project.id}
                    imgUrl={project.image}
                    title={project.title}
                    tags={project.tags}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
            <button className={`arrow-btn -left-5 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}
            >
              <IoIosArrowForward  className='rotate-180'/>
            </button>

            <button className={`arrow-btn -right-5 ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollPrev}
            >
              <IoIosArrowForward />
            </button>
        </div>
      </div>
    </section>
  )
}

export default MyProjects