import React from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import Hero from '../assets/Hero.jpg'
const DesignWork = () => {

    const Data = [
        { key: 1, name: "CodeSandBox ", imgg: "code", link: 'https://www.figma.com/proto/zlAHpfsq3wonJDcvtIo4HV/Code-Editor?node-id=30-26' },
        { key: 2, name: "Golf-Com ", imgg: "golf", link: 'https://dribbble.com/shots/21468637-Golf-Com-A-Commercial-Golf-Webpage-Design?utm_source=Clipboard_Shot&utm_campaign=Kashish_Kataria&utm_content=Golf-Com%20%20-%20A%20Commercial%20Golf%20Webpage%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Kashish_Kataria&utm_content=Golf-Com%20%20-%20A%20Commercial%20Golf%20Webpage%20Design&utm_medium=Social_Share' },
        { key: 3, name: "CratoX ", imgg: "crato", link: 'https://dribbble.com/shots/21718930-CRATOX-a-Design-Service-Company-Web-Design?utm_source=Clipboard_Shot&utm_campaign=Kashish_Kataria&utm_content=CRATOX%20-%20a%20Design%20Service%20Company%20Web%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Kashish_Kataria&utm_content=CRATOX%20-%20a%20Design%20Service%20Company%20Web%20Design&utm_medium=Social_Share' },


    ]

    return (
        <section className='py-10 mx-auto'>


            <ul className='flex justify-center gap-10 md:px-10 md:px-4 px-1 flex-wrap text-center' >
                {
                    Data.map((item) => (
                        <li key={item.key}>
                            <div className='md:w-[450px] w-full bg-white shadow-sm border border-gray-100 hover:shadow-md   rounded-md'>
                                <img src={require(`../assets/${item.imgg}.png`)} className='h-[300px] w-full object-cover' alt={item.name} />
                                <h1 className='pt-4 text-xl font-[600]'>{item.name}</h1>

                                <a href={item.link} >Visit</a>
                            </div>
                        </li>
                    ))
                }





            </ul>
        </section>
    )
}

export default DesignWork