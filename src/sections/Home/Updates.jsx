
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from "../../context/AppContext.jsx";
import {ClosedCaption, Mic} from "lucide-react";

const Updates = () => {
    const { animes } = useContext(AppContext);
    const [filter, setFilter] = useState('all');
    const [filteredList, setFilteredList] = useState(animes);

    const handleFilter = (type) => {
        setFilter(type);
    }

    useEffect(() => {
        let list = [];
        if (filter === 'all') list = animes;
        else if (filter === 'trending') list = animes.filter(anime => anime.trending);
        else list = animes.filter(anime => anime.type === filter);

        setFilteredList(list);
    }, [filter, animes]);

    return (
        <div className=' lg:w-2/3 text-gray-300 lg:mt-15  '>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>
                    Recently Updates
                </h1>
                <div className='flex gap-5 items-center text-[18px] font-[500]'>
                    <button onClick={() => handleFilter('all')} className={`cursor-pointer ${filter==='all' ? 'text-indigo-400 underline': 'text-gray-400'}`}>All</button>
                    <button onClick={() => handleFilter('sub')} className={`${filter==='sub' ? 'text-indigo-400 underline': 'text-gray-400'}`}>Sub</button>
                    <button onClick={() => handleFilter('dub')} className={`${filter==='dub' ? 'text-indigo-400 underline': 'text-gray-400'}`}>Dub</button>
                    <button onClick={() => handleFilter('trending')} className={`${filter==='trending' ? 'text-indigo-400 underline': 'text-gray-400'}`}>Trending</button>
                </div>
            </div>

            {/* Display filtered anime */}
            <div className='mt-4 grid grid-cols-2 md:grid-cols-5 gap-1'>
                {filteredList.map(anime => (
                    <div key={anime.id} className=' p-2 flex flex-col   items-start rounded'>
                        <img src={anime.coverImage.large} loader={<img src={anime.coverImage.large} alt={anime.title.romaji} className='w-full h-60 object-cover rounded' />} alt={anime.title.romaji} className='w-full h-60 object-cover rounded' />
                            <div className="flex gap-2 mt-1 bg-black/50 p-2 rounded">
                                <ClosedCaption />
                                <Mic />
                            </div>
                        <div>
                            <h2 className='mt-2 text-lg hover:text-indigo-300 cursor-pointer leading-none transition-all'>{anime.title.romaji}</h2>
                            <p className='text-sm text-gray-400'>{anime.type==='both'? 'SUB/DUB':anime.type.toUpperCase()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Updates;
