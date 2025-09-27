import React, {useContext} from 'react'
import {useParams} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";
import Animecard from "../common/Animecard.jsx";

const SearchDetail = () => {
    const {name}=useParams()
    const {animes}=useContext(AppContext)
    const searchAnime=animes.filter(anime=>anime.title.romaji.toLowerCase().includes(name.toLowerCase()))
    console.log(searchAnime)

    return (
        <div className={'w-full- min-h-screen py-5 px-10 text-gray-400 bg-[#1C1C1C]'}>
            <h1 className={'text-indigo-400 font-semibold underline leading-none text-2xl'}>Search results for <span className={'uppercase text-gray-400 text-3xl'}>"{name}"</span></h1>
            <div className='mt-4 grid grid-cols-2 md:grid-cols-5 gap-1'>
                {searchAnime?(searchAnime.map((anime, index) => (
                    <div key={index}>
                        <Animecard filteredList={searchAnime} anime={anime} index={anime.id} />
                    </div>
                ))):<p>No anime found</p>}
            </div>
        </div>
    )
}
export default SearchDetail
