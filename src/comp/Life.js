import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
const Life = () => {

  useEffect(() => {
    Aos.init({});
  }, [])


  const Data = [
    { key: 1, name: 'BORN', d2: "15 November 2000", d3: "Rohtak, Haryana, India" },
    { key: 2, name: 'High School', d2: "Scholars Rosary Senior Secondary School", d3: "CGPA:9.3/10" },
    { key: 3, name: 'Secondary School', d2: "Scholars Rosary Senior Secondary School", d3: "CBSE, %: 76.4/100" },
    { key: 4, name: 'Graduation', d2: "Chandigarh Engineering College,Mohali", d3: "CGPA:78.3/10" },
  ]
  return (
    <section className='px-2'>
      <h1 data-aos='fade-right' className='md:text-7xl text-5xl font-[700] tracking-tighter uppercase lineheight  '>My Life</h1>
      {
        Data.map((items) => (
          <div data-aos='fade-right' className='my-8 px-5 md:px-0' key={items.key}>
            <button className='px-4 py-2 ring bg-white ring-gray-200 rounded-md '>{items.name}</button>
            <h2 className='py-2 text-red-600 font-[600]'>{items.d2}</h2>
            <h3 className='text-red-500 font-[400] text-sm'>{items.d3}</h3>
          </div>
        ))
      }
    </section>
  )
}

export default Life