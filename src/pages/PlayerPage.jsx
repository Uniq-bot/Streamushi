import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";
import  Youtube from "react-youtube";
import Animecard from "../common/Animecard.jsx";
const PlayerPage = () => {
    const {animes}=useContext(AppContext)
    const [watch, setWatch]=useState({})
    const {id}=useParams()
    const portalWatch=animes.find(anime=>anime.id===Number(id))
    useEffect(()=>{
        setWatch(portalWatch)
    },[portalWatch, watch])
    console.log(watch)
    const opts = {
        width: "100%",
        height: "600", // pick any px height
        playerVars: {
            controls: 3,
        },
    };
    const getRandomAnimes = (count) => {
        const shuffled = [...animes].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };




    return (
        <div className={'w-full min-h-screen bg-[#1c1c1c]'}>
            <div className={'w-full flex flex-col md:flex-row   gap-5 '}>
               <div>
                   <div className=" lg:aspect-w-30 lg:aspect-h-9 aspect-w-16 aspect-h-9 w-full">
                       <Youtube opts={opts} videoId={watch?.trailer?.id} />
                   </div>

                   <div className={'text-gray-400'}>
                       <h1>Your are watching {watch?.title?.romaji}.
                           <span className={'text-indigo-400'}>Its just the demo test so you can't access the full episode or full season.</span></h1>
                   </div>
               </div>
               <div className={'lg:w-1/2 w-full  '}>
                  <div className={'flex gap-5 p-5'}>
                      <img src={watch?.coverImage?.large} alt={watch?.title?.romaji} className={' lg:h-60 ' +
                          'h-30 object-contain rounded'} />
                     <div className={'flex flex-col items-start gap-2'}>
                         <h1 className={'lg:text-4xl font-bold text-indigo-600 leading-none'}>{watch?.title?.romaji}</h1>
                         <p className={'text-gray-400'}>
                             {watch?.description}
                         </p>
                         <p className={'text-white/100 px-3 py-1 bg-indigo-500/90 rounded ' }>
                             {watch?.type}
                         </p>
                     </div>
                  </div>
                   <div>
                        <h1 className={'lg:text-4xl font-bold text-indigo-600 leading-none'}>
                            Also Watch

                        </h1>
                       <div className="w-full text-white/60 grid grid-cols-2 md:grid-cols-3 gap-4">
                           {getRandomAnimes(3).map((anime) => (
                               <Animecard anime={anime} filteredList={animes} key={anime.id} />
                           ))}
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}
export default PlayerPage
