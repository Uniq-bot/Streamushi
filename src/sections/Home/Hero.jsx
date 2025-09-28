import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { ClosedCaption, Mic } from "lucide-react";
import {Link} from "react-router-dom";

const Hero = () => {
    const { animes } = useContext(AppContext);
    const [current, setCurrent] = useState(0);

    const heroAnime = animes.filter((anime) => anime.trending);

    // Auto-slide
    useEffect(() => {
        if (heroAnime.length === 0) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % heroAnime.length);
        }, 15000);
        return () => clearInterval(interval);
    }, [heroAnime.length]);

    return (
        <div className="w-full  overflow-hidden relative">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {heroAnime.map((anime) => (
                    <div
                        key={anime.id}
                        className="min-w-full lg:h-[80vh] h-[40vh] flex bg-center bg-no-repeat bg-cover
                         justify-between items-end relative"
                        style={{ backgroundImage: `url(${anime.bannerImage})` }}
                    >
                        {/* Banner Image */}


                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-black/50 z-10" />

                        {/* Text & Icons */}
                        <div className="absolute lg:static inset-0 z-20 flex flex-col justify-end md:pb-10 pb-5   lg:justify-center px-4 sm:px-8 md:px-12 lg:px-16 text-white">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-400 lg:text-5xl font-semibold">
                                {anime.title.romaji}
                            </h1>
                            <div className="flex text-gray-400 gap-3 mt-2 text-lg">
                                <ClosedCaption />
                                <Mic />
                            </div>
                            <p className="mt-2 text-gray-400">{anime.description}</p>
                            {anime.trailer && (
                                <Link to={`/anime/${anime.id}`} className="mt-4 text-center hover:bg-indigo-900 transition-all duration-75 cursor-pointer bg-indigo-500/90 text-gray-300 px-4 py-2 rounded">
                                    Watch Demo
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
