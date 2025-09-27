import React, {useContext, useEffect, useState} from 'react'
import {AppContext} from "../context/AppContext.jsx";

const TopAnime = () => {
    const {animes}=useContext(AppContext)
    const [filter, setFilter] = useState('today');
    const [filteredData, setFilteredList]=useState(animes)
    const handleFilter = (type) => {
        setFilter(type);
    }
    useEffect(() => {
        const now = new Date();
        let list = [];

        if (filter === 'today') {
            list = animes.filter(anime => {
                const updated = new Date(anime.updatedAt);
                return updated.toDateString() === now.toDateString(); // same day
            });
        } else if (filter === 'week') {
            list = animes.filter(anime => {
                const updated = new Date(anime.updatedAt);
                const diff = (now - updated) / (1000 * 60 * 60 * 24); // difference in days
                return diff <= 7;
            });
        } else if (filter === 'month') {
            list = animes.filter(anime => {
                const updated = new Date(anime.updatedAt);
                const diff = (now - updated) / (1000 * 60 * 60 * 24);
                return diff <= 30;
            });
        }

        setFilteredList(list);
    }, [filter, animes]);

    return (
        <div className={' h-full flex flex-col gap-5'}>
              <div className={'flex justify-between items-center w-full'}>
                  <h1 className={'text-2xl text-gray-400 font-semibold'}>
                      Top Anime
                  </h1>
                  <div className={'flex gap-2 items-center py-1'}>
                      <button  onClick={() => handleFilter('today')}
                               className={`${filter === 'today' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-black/50'} px-4 py-1 rounded`}>Today</button>
                      <button  onClick={() => handleFilter('month')}
                               className={`${filter === 'month' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-black/50'} px-4 py-1 rounded`}>Month</button>
                      <button  onClick={() => handleFilter('week')}
                               className={`${filter === 'week' ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-black/50'} px-4 py-1 rounded`}>Week</button>
                  </div>
              </div>
            <div className={'flex gap-2 flex-col'}>
                {filteredData.slice(0,6).map((anime, index) => {
                    let rankClass = '';
                    if(index === 0) rankClass = 'text-transparent [-webkit-text-stroke:2px_#f87171]';
                    if(index === 1) rankClass = 'text-transparent [-webkit-text-stroke:2px_#3b82f6]';
                    if(index === 2) rankClass = 'text-transparent [-webkit-text-stroke:2px_#facc15]';
                    if(index>2) rankClass = 'text-transparent [-webkit-text-stroke:2px_#D1D5DC]';


                    return (
                        <div key={anime.id} className='p-2 flex flex-row gap-5 bg-black/50 items-start rounded'>
            <span className={`font-extrabold text-4xl ${rankClass} relative`}>
                <span className="absolute top-0 left-0 w-full h-full text-transparent stroke-current">{index + 1}</span>
                {index + 1}
            </span>
                            <img src={anime.coverImage.large} alt={anime.title.romaji} className='w-20 h-25 object-cover rounded' />
                            <div>
                                <h2 className='mt-2 text-lg hover:text-indigo-300 text-white cursor-pointer transition-all'>
                                    {anime.title.romaji}
                                </h2>
                                <p className='text-sm text-gray-400'>{anime.type === 'both' ? 'SUB/DUB' : anime.type.toUpperCase()}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default TopAnime
