import React, {use} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {assets} from "../assets/assets.js";
import {Facebook, Twitter, Instagram} from "lucide-react";

const Footer = () => {
    const navigate=useNavigate()
    const alphabet = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(65 + i) // A–Z
    );
    console.log(alphabet)


    return (
        <div className={'w-full flex flex-col justify-center gap-5 px-15 min-h-100 text-gray-300 bg-[#111]'}>
            <div className={'flex items-baseline gap-2'}>
                <h1 className={'text-3xl font-bold text-indigo-400'}>
                    A-Z List
                </h1>
                <p className={'text-sm'}>
                    Search anime order by alphabet name A to Z
                </p>
            </div>
            <div className={'flex flex-wrap justify-center lg:justify-start items-baseline gap-2'}>
                <button className={'bg-indigo-500/90 hover:bg-indigo-400 cursor-pointer text-white px-4 py-2 rounded'} onClick={()=>navigate(`/anime-list/all`)}>All</button>
                {alphabet.map((letter, index) => (
                    <button className={'bg-indigo-500/90 hover:bg-indigo-400 cursor-pointer text-white px-4 py-2 rounded'} onClick={()=>navigate(`/anime-list/a-z?/${letter.toLowerCase()}/res`)} key={index}>{letter}</button>
                ))}
            </div>
           <div className={'flex items-center  gap-5'}>
               <Link to={'/'} className={'flex items-center lg:gap-2'}>
                   <img src={assets.sushi} alt={'logo'} className={'lg:w-25 lg:h-20 w-10'} />
                   <h1 className={'text-sm font-semibold text-[#DDDDDD] md:text-3xl'}>Streamushi</h1>
               </Link>
               <div className={'flex justify-between rounded-full items-center gap-2 px-3 py-2 bg-white/10 w-60'}>
                   <h1>Join us now: </h1>
                   <Facebook />
                   <Twitter />
                   <Instagram />
               </div>
           </div>
            <div>
                <h1>Copyright © 2025 Streamushi. All rights reserved.</h1>
                <p>
                    Powered by <span className={'text-indigo-400 '}>Streamushi</span>
                </p>
            </div>
        </div>
    )
}
export default Footer
