import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AppContext} from "../context/AppContext.jsx";
import Animecard from "../common/Animecard.jsx";

const SearchBar = () => {
    const {animes} = useContext(AppContext)
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [error, setError] = useState(false);
    const [results, setResults]=useState([])
    const [focused, setFocused] = useState(false);
    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (error && value.length > 0) setError(false);

        if (!value) {
            setResults([]);
        } else {
            const filtered = animes.filter((item) =>
                item.title.romaji.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filtered);
        }
    };

    console.log(results)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim().length === 0) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000)

        return
        }

        navigate(`/search/${query.trim()}`);
        setQuery(""); // clear input
    };

    return (
        <div className={'w-full relative'}>
            <form
                onSubmit={handleSubmit}
                className={`flex w-full ${
                    error ? "border-red-500 animate-pulse" : "border-gray-300/30"
                } items-center border justify-between border-gray-300/30 p-1 rounded-md`
                }>
                <input
                    type="text"
                    onFocus={()=>setFocused(true)}
                    onBlur={() => setTimeout(() => setFocused(false), 100)}
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search"
                    className={`placeholder:text-gray-300 flex-1 text-gray-300 outline-none rounded-md px-4 py-2 `}
                />
                <button
                    type="submit"
                    className="bg-indigo-500/90 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </form>
            <div className={`w-full  absolute rounded-lg  ${focused ? "min-h-100" : "min-h-0 opacity-0 pointer-events-none"} transition-all duration-150   left-0 z-10 bg-[#1C1C1C]`}>
                {/*dynamic search */}
                <div className={'flex w-full flex-col gap-1'}>
                    {
                        results.length>0?(
                            results.map((anime, index)=>(
                                <Link to={`/anime/${anime.id}`} key={index}>

                                    <p className={'text-gray-300 w-full hover:bg-gray-300/30 hover:text-indigo-400 transition-all duration-75 rounded-lg text-xl border-b p-2 border-gray-300/30'}>
                                        {anime.title.romaji}
                                    </p>

                                </Link>
                            ))
                        ):(
                            <p className={'text-gray-300 flex w-full h-100 text-2xl items-center justify-center'}>
                                Search your desire
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
