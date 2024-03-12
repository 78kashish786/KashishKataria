import React from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import Hero from '../assets/Hero.jpg'
import MovieDB from '../assets/MovieDB.png'
import Netflix from "../assets/Netflix.png"
import Qliv from "../assets/Qliv.png"
import Ava from "../assets/Avalon.png"
import dec6 from '../assets/dec6.png'
import ShopKart from '../assets/ShopKart.png'
import legel from '../assets/legel.png'
const DevelopeWork = () => {

    const DevelopData = [
        // { key: 1, name: "Qliv", lin: "https://zrz8hv.csb.app", imgg: "Qliv" },
        { key: 1, name: "Legel Dashboard", lin: "https://legel-dashboard-kqza.vercel.app/", imgg: "legel" },
        { key: 2, name: "MovieDB App", lin: "https://c7yiyb.csb.app/", imgg: "MovieDB" },

        { key: 3, name: "Dec6 Consulting pvt ltd", lin: "https://dec6.in/", imgg: "dec6" },
        { key: 4, name: "ShopKart landing Page", lin: "https://bucolic-torrone-abe9b6.netlify.app/", imgg: "ShopKart" },
        { key: 5, name: "Netflix ", lin: "https://37h1v.csb.app/", imgg: "Netflix" },

    ]

    return (
        <section className='py-10 mx-auto'>


            <ul className='flex justify-center gap-10 md:px-10 md:px-4 px-1 flex-wrap text-center' >
                {
                    DevelopData.map((item) => (
                        <li key={item.key}>
                            <div className='md:w-[450px] w-full bg-white shadow-sm border border-gray-100 hover:shadow-md rounded-md'>
                                <img src={require(`../assets/${item.imgg}.png`)} className='h-[300px] w-full object-cover' alt={item.name} />
                                <h1 className='pt-4 text-xl font-[600]'>{item.name}</h1>

                                <a href={item.lin} >Visit</a>
                            </div>
                        </li>
                    ))
                }





            </ul>
        </section>
    )
}

export default DevelopeWork