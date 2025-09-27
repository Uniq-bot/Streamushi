import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { ClosedCaption, Mic } from "lucide-react";

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
                    <div key={anime.id} className="min-w-full flex flex-row-reverse justify-between items-end relative">
                        {/* Banner Image */}
                        <img
                            src={anime.bannerImage}
                            alt={anime.title.romaji}
                            className="w-full lg:w-auto h-[250px] round sm:h-[350px] lg:h-[450px] object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute lg:hidden inset-0 bg-gradient-to-t from-black/100 to-black/50 z-10" />

                        {/* Text & Icons */}
                        <div className="absolute lg:static inset-0 z-20 flex flex-col justify-end pb-4   lg:justify-center px-4 sm:px-8 md:px-12 lg:px-16 text-white">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                                {anime.title.romaji}
                            </h1>
                            <div className="flex gap-3 mt-2 text-lg">
                                <ClosedCaption />
                                <Mic />
                            </div>
                            <p className="mt-2">{anime.description}</p>
                            {anime.trailer && (
                                <button className="mt-4 bg-indigo-500/90 text-white px-4 py-2 rounded">
                                    Watch Trailer
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
