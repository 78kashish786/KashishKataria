import React, { useEffect } from 'react'
import { FaCopyright } from 'react-icons/fa'
import Hero from '../assets/kash.jpg'
import resume from '../Resume/kashish_kataria.pdf'
import Aos from 'aos'
import "aos/dist/aos.css";
const HeroSection = () => {

  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <section className='px-2   mx-auto  flex flex-col text-center  justify-center items-center w-full h-full py-10'>
      <div className='text-center'>
        <div data-aos='fade-right' className='text-center'>

          <h1 className='md:text-[150px] text-5xl font-[600] uppercase md:my-0 tracking-tighter leading-tight lineheight my-5 '>Developer & Designer
            <FaCopyright className='md:inline mx-5 hidden ' />
          </h1>
          <div className='md:flex font-[400] justify-center items-center gap-10  text-xl mb-5'>
            <p className='mb-3 md:mb-0'>
              I build things for the web.
            </p>
            <a
              href={resume}
              download="Kashish_kataria_resume"
              target="_blank"
              rel="noreferrer"
              className='font-[600]  hover:bg-gray-100 hover:text-red-500 bg-red-500 px-5 py-1 text-white rounded-full' >Resume</a>
          </div>
        </div>
        <img data-aos='fade-left' className='object-cover  h-[450px] w-[400px] mx-auto   p-2 md:rounded-full border border-gray-300' src={Hero} alt="/" />
      </div>
    </section>
  )
}

export default HeroSection
