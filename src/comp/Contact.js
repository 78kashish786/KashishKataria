import React, { useEffect } from 'react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { FaDribbble } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css";
const Contact = () => {

  useEffect(() => {
    Aos.init();
  }, [])
  const social = [

    { key: 1, name: "Linkdin", link: "https://www.linkedin.com/in/kashishkatariaofficial/" },
    { key: 2, name: "Dribble", link: "https://dribbble.com/Kashish_Kataria" },


  ]
  return (
    <section data-aos='zoom-in-down' className='px-2 md:px-0 w-full md:h-[80vh] h-screen   justify-center text-center'>
      <h1 className='md:text-[150px] text-7xl text-center md:text-center font-[600] uppercase tracking-tighter leading-tight lineheight my-5'>Lets Work<br />
        Together</h1>
      <p className='text-lg font-[500]  '>Contact me for more Information</p>
      <FaRegArrowAltCircleDown className='mx-auto text-5xl my-10 animate-bounce' />
      <div className='mx-auto md:w-[40%] text-center md:flex justify-between p-3'>
        <div className='text-left p-3 rounded-xl  text-center'>
          <h1>E-mail me at</h1>
          <button onClick={() => window.location = 'mailto:kkofficio@gmail.com'} className='hover:bg-white hover:text-red-600 hover:ring  hover:ring-red-500 bg-red-500 text-white py-2 rounded-md mt-5 px-4 mailto:kkofficio@gmail.com'>kkofficio@gmail.com</button>
        </div>
        <div className='text-left p-3  rounded-xl  text-center '>
          <h1>Call me At</h1>
          <button className='ring ring-red-500 text-red-600 font-[700] py-2 rounded-md mt-5 px-4'>+91 9485686863</button>
        </div>

      </div>
      {/* <hr className='md:w-[40%]  mx-auto border-2 border-red-200' /> */}
      <div className='flex mx-auto justify-center gap-5 text-2xl mt-8  w-[50%] '>

        <ul className='flex gap-5 mb-2 '>

          {
            social.map((item) => (
              <li key={item.key}><a className='text-sm font-bold' href={item.link} >{item.name}</a></li>
            ))
          }

        </ul>
      </div>

    </section>
  )
}

export default Contact