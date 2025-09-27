import React from 'react'
import {assets} from "../assets/assets.js";
import SearchBar from "../components/SearchBar.jsx";

const NavBar = () => {
    return (
        <div className={'w-full h-20 bg-[#1C1C1C] flex justify-between lg:px-10 px-2 items-center'}>
           <div className={'flex lg:gap-10 gap-2 '}>
               <img src={assets.menu} alt={'menu'} className={'w-5 md:w-7 h-20'} />
               <div className={'flex items-center lg:gap-2'}>
                   <img src={assets.sushi} alt={'logo'} className={'lg:w-20 w-10'} />
                   <h1 className={'text-sm font-semibold text-[#DDDDDD] md:text-3xl'}>Streamushi</h1>
               </div>
           </div>
            <div className={'hidden md:flex md:w-1/2 lg:w-1/2'}>
                <SearchBar />
            </div>
            <div>
                <button className={'flex items-center bg-indigo-500/90 text-white lg:px-4 px-2 lg:py-2 py-1 rounded'}>
                    <span>Sign In</span>
                    <img src={assets.right_icon} alt={'right_icon'} className={'w-5 h-5'} />
                </button>
            </div>
        </div>
    )
}
export default NavBar
