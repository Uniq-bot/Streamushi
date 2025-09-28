import React, { useContext } from 'react';
import {Link, useParams} from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import Animecard from "../common/Animecard.jsx";

const AnimeList = () => {
    const { animes } = useContext(AppContext);
    const { input } = useParams(); // could be undefined
    const alphabet = input ? input.toLowerCase() : 'all';

    const filteredList = alphabet === 'all'
        ? animes
        : animes.filter(anime =>
            anime.title.romaji[0].toLowerCase() === alphabet
        );

    console.log('Filtered Anime:', filteredList);

    return (
        <div className="p-4 bg-[#1c1c1c] min-h-screen text-gray-200">
            <h1 className="text-2xl font-bold mb-4">
                {alphabet === 'all' ? 'All Anime' : `Anime starting with "${alphabet.toUpperCase()}"`}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {filteredList.length>0?filteredList.map(anime => (
                    <Animecard filteredList={filteredList} anime={anime} index={anime.id} />
                )): <div className={''}><p className={'text-gray-400 text-center text-2xl'}>
                    No anime found
                </p>
                    <div className={'flex '}>
                        <span>Go through /</span><Link to={'/'} className={'text-indigo-400'}>Home</Link><span>/</span>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default AnimeList;
