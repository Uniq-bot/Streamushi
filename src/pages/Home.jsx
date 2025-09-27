import React, {useContext} from 'react'
import {AppContext} from "../context/AppContext.jsx";
import App from "../App.jsx";
import Hero from "../sections/Home/Hero.jsx";
import Updates from "../sections/Home/Updates.jsx";
import TopAnime from "../common/TopAnime.jsx";
export const Home = () => {
    const {animes}=useContext(AppContext)
    console.log(animes)

    return (
        <div className={'w-full min-h-screen bg-[#1C1C1C]'}>
            <Hero />
            <div className={'flex  justify-between min-h-screen w-full py-5 px-5 mt-5  gap-5 '}>
            <Updates />
             <div className={'hidden flex-1 md:block'}>
                 <TopAnime />
             </div>
            </div>
        </div>
    )
}
