import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets.js";
import SearchBar from "../components/SearchBar.jsx";
import {Link} from "react-router-dom";
import { getUser, clearUser } from "../utils/auth";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(getUser());

    useEffect(() => {
        // Sync with changes from other tabs
        const onStorage = () => setCurrentUser(getUser());
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    const onLogout = () => {
        clearUser();
        setCurrentUser(null);
    }

    return (
        <>
            <div className={'w-full border-b border-b-gray-300/30 h-20 bg-[#1C1C1C] flex justify-between lg:px-10 px-2 items-center relative z-50'}>
                <div className={'flex lg:gap-10 gap-2 '}>
                    <button
                        aria-label={'Toggle menu'}
                        aria-expanded={open}
                        onClick={() => setOpen(prev => !prev)}
                        className={'flex items-center justify-center w-10 h-10 rounded hover:bg-white/5 transition md:w-12 md:h-12'}
                    >
                        {/* SVG Hamburger -> X */}
                        <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 md:w-7 md:h-7 text-[#DDDDDD]"
                            aria-hidden="true"
                        >
                            <line
                                x1="4" y1="7" x2="20" y2="7"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                style={{
                                    transformOrigin: '12px 12px',
                                    transition: 'transform 300ms',
                                    transform: open ? 'translateY(5px) rotate(45deg)' : 'none'
                                }}
                            />
                            <line
                                x1="4" y1="12" x2="20" y2="12"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                style={{
                                    transition: 'opacity 300ms',
                                    opacity: open ? 0 : 1
                                }}
                            />
                            <line
                                x1="4" y1="17" x2="20" y2="17"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                style={{
                                    transformOrigin: '12px 12px',
                                    transition: 'transform 300ms',
                                    transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none'
                                }}
                            />
                        </svg>
                    </button>
                    <Link to={'/'} className={'flex items-center lg:gap-2'}>
                        <img src={assets.sushi} alt={'logo'} className={'lg:w-20 w-10'} />
                        <h1 className={'text-sm font-semibold text-[#DDDDDD] md:text-3xl'}>Streamushi</h1>
                    </Link>
                </div>
                <div className={'hidden md:flex md:w-1/2 lg:w-1/2'}>
                    <SearchBar />
                </div>
                <div>
                    {currentUser?.loggedIn ? (
                        <div className={'flex items-center gap-2'}>
                            <span className={'hidden sm:inline text-[#DDDDDD]'}>
                                {currentUser.name}
                            </span>
                            <button onClick={onLogout} className={'flex items-center bg-gray-700/80 text-white lg:px-4 px-2 lg:py-2 py-1 rounded hover:bg-gray-700'}>
                                <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <Link to={'/signin'} className={'flex items-center bg-indigo-500/90 text-white lg:px-4 px-2 lg:py-2 py-1 rounded'}>
                            <span>Sign In</span>
                            <img src={assets.right_icon} alt={'right_icon'} className={'w-5 h-5'} />
                        </Link>
                    )}
                </div>
            </div>

            {/* Slide-out Menu */}
            <div className={`fixed inset-0 z-40 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setOpen(false)}
                />
                {/* Drawer */}
                <nav
                    className={`absolute top-0 left-0 h-full w-64 bg-[#1C1C1C] border-r border-gray-700 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
                    aria-label={'Main navigation'}
                >
                    <div className={'h-20 flex items-center justify-between px-4 border-b border-gray-700'}>
                        <div className={'flex items-center gap-2'}>
                            <img src={assets.sushi} alt={'logo'} className={'w-8'} />
                            <span className={'text-[#DDDDDD] font-semibold'}>Streamushi</span>
                        </div>
                        <button
                            aria-label={'Close menu'}
                            onClick={() => setOpen(false)}
                            className={'w-9 h-9 rounded hover:bg-white/5 text-[#DDDDDD]'}
                        >
                            ✕
                        </button>
                    </div>

                    <ul className={'px-2 py-3 text-[#DDDDDD]'}>
                        <li>
                            <Link to={'/'} onClick={() => setOpen(false)} className={'block px-3 py-2 rounded hover:bg-white/5'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/anime-list/all'} onClick={() => setOpen(false)} className={'block px-3 py-2 rounded hover:bg-white/5'}>
                                All
                            </Link>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default NavBar
