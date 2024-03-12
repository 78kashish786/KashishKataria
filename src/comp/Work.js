import React, { useEffect, useState } from 'react'
import DesignWork from './DesignWork'
import DevelopeWork from './DevelopeWork';
import Aos from 'aos'
import "aos/dist/aos.css";
const Work = () => {

  const [dev, setdev] = useState(true);
  const [des, setdes] = useState(false);

  const devhandleClick = () => {
    setdev(true);
    setdes(false);
  }
  const deshandleClick = () => {

    setdes(true);
    setdev(false);
  }

  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <section className='px-2'>
      <h1 data-aos='fade-right' className='md:text-7xl text-5xl font-[700] tracking-tighter uppercase lineheight  '>Work<br />Samples</h1>
      <div className='flex justify-center gap-10 my-5 '>
        <button className={dev ? `py-2 px-4 ring ring-gray-200 rounded-md bg-white font-[500]` : "py-2 px-4"} onClick={devhandleClick}>Development</button>
        <button className={des ? `py-2 px-4 ring ring-gray-200 rounded-md bg-white font-[500]` : "py-2 px-4"} onClick={deshandleClick}> Designing</button>
      </div>
      <div>
        {
          dev ? <DevelopeWork /> : <DesignWork />
        }
      </div>



    </section>
  )
}

export default Work