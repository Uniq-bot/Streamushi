    import React, {useState} from 'react'
    import {Link} from "react-router-dom";
    import {ClosedCaption, Mic} from "lucide-react";
    import {Play,CirclePlus} from "lucide-react";
    const Animecard = ({anime, index, filteredList}) => {
        const [hoverId, setHoverId]= useState(null)
        const displayTitle = (anime.title?.romaji || '').split(' — ')[0]

        return (

                <Link to={`/anime/${anime.id}`} onClick={()=>scrollTo(0,0,)} onMouseEnter={()=>setHoverId(anime.id)} onMouseLeave={()=>setHoverId(null)} key={anime.id} className=' p-2 flex gap-1 relative hover:cursor-pointer flex-col   items-start rounded'>
                    <div  className={'w-full h-60 relative'}>
                        <div className={`absolute hidden md:flex ${hoverId===anime.id?'opacity-100':'opacity-0'}  w-full h-full top-0 left-0 flex transition-all duration-100 ease-in-out justify-center items-center  bg-black/50 z-10`}>
                            <Play size={50} />
                        </div>

                        <img src={anime.coverImage.large}  loader={<img src={anime.coverImage.large} alt={anime.title.romaji} className='w-full h-60 object-cover rounded' />} alt={anime.title.romaji} className='w-full h-60 object-cover rounded' />
                    </div>
                    <div className="flex gap-2 mt-1 bg-black/50 p-2 rounded">
                        <ClosedCaption />
                        <Mic />
                    </div>
                    <div>
                        <h2 className='mt-2 text-lg hover:text-indigo-300 cursor-pointer leading-none transition-all'>{displayTitle}</h2>
                        <p className='text-sm text-gray-400'>{anime.type==='both'? 'SUB/DUB':anime.type.toUpperCase()}</p>
                    </div>
                    <div className={`w-70 -right-60 top-20 z-20  ${hoverId===anime.id?'block':'hidden'} absolute min-h-30 bg-[#111] rounded`}>
                        {filteredList ? (
                            <div key={index} className={'flex flex-col px-2 py-2'}>
                                <h2 className={'text-lg font-semibold text-indigo-400'}>{displayTitle}</h2>
                                <p className={'text-sm text-gray-400'}>{anime.description.slice(0, 100)}</p>
                                <div className={'flex gap-2 mt-2'}>
                                    <button className={'bg-indigo-500/90 text-white px-4 py-2 rounded'}>Watch Now</button>

                                </div>
                            </div>
                        ):<p>Loading....</p>}
                    </div>
                </Link>

        )
    }
    export default Animecard
