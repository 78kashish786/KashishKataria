import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
const About = () => {
  useEffect(()=>{
    Aos.init({})
  },[])
  return (
    <section className='px-2 mb-10 '>
      {/* <h1 className='md:text-7xl text-5xl font-[700] tracking-tighter uppercase lineheight text-right'>About <br/>me</h1> */}
      <p data-aos='fade-left' className='mb-10 text-xl text-center font-[400] text-red-500 md:w-[50%] w-[90%] mx-auto'>
        I am a Software Engineer based out from India, I use human psychology ,{' '}
        <mark className='px-2 bg-yellow-200 text-red-500'>User-Centeric Design</mark> and{' '}
        <mark className='px-2 bg-yellow-200 text-red-500'>
          Development skills
        </mark>{' '}
        to make fun,loving digital products and Experiences
      </p>
    </section>
  )
}

export default About
