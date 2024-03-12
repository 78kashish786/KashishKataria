import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
const Skills = () => {

    useEffect(() => {
        Aos.init({});
    }, [])

    const skillData = [
        { key: 1, name: "HTML5 & CSS3" },
        { key: 2, name: "JavaScript" },
        { key: 3, name: "React Js" },
        { key: 4, name: "React Native" },
        { key: 7, name: "Tailwind CSS" },
        { key: 8, name: "Figma" },
        { key: 5, name: "Next js (currently learing)" },
        { key: 6, name: "UX Design" },
    ]

    const HobbyData = [
        { key: 1, name: "Reading" },
        { key: 2, name: "Fitness" },
        { key: 3, name: "Investing" },
        { key: 4, name: "Web Design" },
        { key: 6, name: "Cafe-Hopping" },
        { key: 7, name: "Music" },

    ]

    return (
        <section className='py-10 my-10 px-2'>
            <h1 data-aos='fade-right' className='md:text-7xl  text-5xl font-[700] tracking-tighter uppercase lineheight  '>Relevent <br />Skills</h1>
            <div className='mx-auto md:py-10 py-0 '>
                <ul data-aos='fade-right' className='flex gap-5 flex-wrap my-10 '>
                    {
                        skillData.map((item) => (
                            <li key={item.key} className='px-5 py-3 text-sm  shadow-sm bg-white rounded-md mx-2 ring ring-gray-200'>{item.name}</li>
                        ))
                    }


                </ul>
            </div>
            <div className='text-right'>
                <h1 data-aos='fade-left' className='md:text-7xl text-5xl font-[700] tracking-tighter uppercase lineheight  '>Hobbies &<br />Interests</h1>
                <div className='mx-auto md:py-10 py-0  text-right'>
                    <ul data-aos='fade-left' className='flex gap-3 flex-wrap my-10 justify-end'>
                        {
                            HobbyData.map((items) => (
                                <li key={items.key} className='px-5 py-3 text-sm  shadow-sm bg-white rounded-md mx-2 ring ring-gray-200'>{items.name}</li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Skills