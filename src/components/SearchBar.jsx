import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [error, setError] = useState(false);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        if (error && e.target.value.length > 0) {
            setError(false); // clear error once user types
        }
    };

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
        <form
            onSubmit={handleSubmit}
            className={`flex w-full ${
                    error ? "border-red-500 animate-pulse" : "border-gray-300/30"
} items-center border justify-between border-gray-300/30 p-1 rounded-md`
            }>
            <input
                type="text"
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
    );
};

export default SearchBar;
