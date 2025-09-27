import React from 'react'

const SearchBar = () => {
    return (
        <form className={'flex w-full items-center border justify-between border-gray-300 p-1 rounded-md '} >
            <input type="text" placeholder="Search" className={'placeholder:text-gray-300 flex-1 text-gray-300 outline-none  rounded-md px-4 py-2'} />
            <button type="submit" className={'bg-indigo-500/90 text-white px-4 py-2 rounded'}>Search</button>
        </form>
    )
}
export default SearchBar
