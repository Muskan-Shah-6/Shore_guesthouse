import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <header>
            <div className="container mx-auto px-6">
                <nav className="flex items-center justify-between h-14">
                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="text-md ml-4"
                        >
                            Shore GuestHouse
                        </Link>
                    </div>

                    {/* Menu Items */}
                    <div className='block lg:hidden md:hidden'>
                        <button>
                            <FaBars size={24} />
                        </button>
                    </div>
                    <div className='hidden sm:flex'>
                        <ul className="flex items-center h-full gap-5">
                            <div className="border-l h-14 mx-2"></div>
                            <li className="h-full flex items-center px-4 w-30">
                                <Link to="/" className="text-sm hover:text-[#2f3344] font-semibold ">
                                    Home
                                </Link>
                            </li>
                            <div className="border-l h-14 mx-2"></div>
                            <li className="h-full flex items-center px-4 w-30">
                                <Link to="/gallery" className="text-sm hover:text-[#2f3344] font-semibold">
                                    Gallery
                                </Link>
                            </li>
                            <div className="border-l h-14 mx-2"></div>
                            <li className="h-full flex items-center px-4 w-30">
                                <Link to="/info" className="text-sm hover:text-[#2f3344] font-semibold">
                                    Information
                                </Link>
                            </li>
                            <div className="border-l h-14 mx-2"></div>
                            <li className="h-full flex items-center bg-black px-4 w-30 ">
                                <a href='#'
                                    className="text-white   px-2 py-2 rounded-sm hover:opacity-90 text-sm"
                                >
                                    Book now
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <hr />
        </header>
    );
};

export default Navbar;
