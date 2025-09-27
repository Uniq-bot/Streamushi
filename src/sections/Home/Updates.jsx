
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from "../../context/AppContext.jsx";
import {ClosedCaption, Mic} from "lucide-react";
import {Play,CirclePlus} from "lucide-react";
import Animecard from "../../common/Animecard.jsx";
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
                {filteredList?(filteredList.map((anime, index) => (
                    <div key={index}>
                        <Animecard filteredList={filteredList} anime={anime} index={anime.id} />
                    </div>
                ))):<p>No anime found</p>}
            </div>
        </div>
    );
}

export default Updates;
