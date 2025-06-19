import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [ismenuOpen, setIsmenuOpen] = useState(false)
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
                    <div className="sm:hidden">
                        <button onClick={() => setIsmenuOpen(!ismenuOpen)}>
                            {ismenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                    <div className='hidden sm:flex'>
                        <ul className="flex items-center h-full gap-5">
                            <div className="border-l h-14 mx-2"></div>
                            <li className="h-full flex items-center px-4 w-30">
                                <Link to="/" className="text-sm hover:text-[#2f3344] font-semibold font-sans">
                                    Home
                                </Link>
                            </li>
                            <div className="border-l h-14 mx-2"></div>
                            <li className="h-full flex items-center px-4 w-30">
                                <Link to="/gallery" className="text-sm hover:text-[#2f3344] font-semibold font-sans">
                                    Gallery
                                </Link>
                            </li>
                            <div className="border-l h-14 mx-2"></div>
                            <li className="h-full flex items-center px-4 w-30">
                                <Link to="/info" className="text-sm hover:text-[#2f3344] font-semibold font-sans">
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
                {/* Menu options for responsive || mobile screens */}
                
                <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${ismenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className='sm:hidden flex flex-col gap-4 mt-4 pb-4 px-4'>
                        <li><Link to='/' onClick={() => setIsmenuOpen(false)}>Home</Link></li>
                        <li><Link to='/gallery' onClick={() => setIsmenuOpen(false)}>Gallery</Link></li>
                        <li><Link to='/info' onClick={() => setIsmenuOpen(false)}>Information</Link></li>
                        <li className="text-white bg-black px-4 py-2 rounded-sm inline-block w-fit">Book Now</li>
                    </ul>
                </div> 
            </div>
            <hr />
        </header>
    );
};

export default Navbar;
