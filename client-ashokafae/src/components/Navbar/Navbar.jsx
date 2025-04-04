// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useAuth } from '../../utils/AuthContext'; // Import the useAuth hook


// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isAdmin, setIsAdmin] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation(); // Get the current location object
//     const { logout } = useAuth(); // Get logout from AuthContext


//     useEffect(() => {
//         const user = localStorage.getItem('user');
//         if (user) {
//             setIsLoggedIn(true);
//             const parsedUser  = JSON.parse(user);
//             setIsAdmin(parsedUser.role === 'admin');
//         }
//     }, []);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             const menu = document.getElementById('mobile-menu');
//             const button = document.getElementById('hamburger-button');
//             if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
//                 setIsMenuOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleLogout = () => {
//         localStorage.clear();
//         setIsLoggedIn(false);
//         setIsAdmin(false);
//         logout();
//         navigate('/');
//     };

//     const navItems = ["HOME", "EVENTS", "OUR SERVICES", "GALLERY", "ABOUT", "CONTACT"];

//     return (
//         <nav className="sticky top-0 left-0 w-full h-14 shadow-md z-50 flex items-center justify-between px-4 lg:px-6 bg-white">
//             {/* Logo */}
//             <div className="flex items-center">
//                 <Link to="/" className="block h-12">
//                     <img
//                         src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1738000071/ashoka-events-logo_juz99g.png"
//                         alt="Ashoka"
//                         className="h-12 w-auto object-contain"
//                     />
//                 </Link>
//             </div>

//             {/* Centered Navigation */}
//             <div className="hidden lg:flex flex-1 justify-center items-center gap-6 tracking-widest">
//                 {navItems.map((item, index) => {
//                     const path = `/${item.toLowerCase().replace(' ', '-')}`;
//                     const isActive = location.pathname === path; // Check if the current path matches

//                     return (
//                         <div className="relative group" key={index}>
//                             <Link
//                                 to={path}
//                                 className={`text-black no-underline text-xs hover:text-gray-800 hover:font-bold transition duration-200 ${isActive ? 'text-green-500 font-bold' : ''}`}
//                             >
//                                 {item}
//                             </Link>
//                             {item === "EVENTS" && (
//                                 <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg min-w-[200px]">
//                                     <div className="relative group/nested">
//                                         <Link to="/events/wedding-event" className="block text-xs px-4 py-2 font-rounded capitalize text-black no-underline  hover:bg-gray-200">
//                                             Wedding Event
//                                         </Link>
//                                         <div className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg min-w-[200px] no-underline text-xs">
//                                             <Link to="/events/haldi-decoar" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Haldi Decoar</Link>
//                                             <Link to="/events/mehndi-ceremony" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Mehndi Ceremony</Link>
//                                             <Link to="/events/reception-stage" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Reception Stage</Link>
//                                             <Link to="/events/entrance-gate" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Entrance Gate</Link>
//                                             <Link to="/events/vidhi-mandap" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Vidhi Mandap</Link>
//                                             <Link to="/events/special-entry" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Special Entry</Link>
//                                             <Link to="/events/photo-booth" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Photo Booth</Link>
//                                         </div>
//                                     </div>
//                                     <Link to="/events/engagement-event" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Engagement Event</Link>
//                                     <Link to="/events/anniversary-ceremony" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Anniversary Ceremony</Link>
//                                     <Link to="/events/birthday-party" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Birthday Party</Link>
//                                     <Link to="/events/baby-shower" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Baby Shower</Link>
//                                 </div>
//                             )}
//                         </div>
//                     );
//                 })}


//                 {isLoggedIn && (
//                     <>
//                         {isAdmin && (
//                             <Link to="/admin" className={`text-black no-underline text-xs hover:text-gray-600 transition duration-300 ${location.pathname === '/admin' ? 'text-green-500 font-bold' : ''}`}>
//                                 ADMIN
//                             </Link>
//                         )}
//                         <div
//                             onClick={handleLogout}
//                             className="text-black no-underline text-xs  hover:text-gray-600 transition duration-300 border-none tracking-widest bg-transparent cursor-pointer"
//                         >
//                             LOGOUT
//                         </div>
//                     </>
//                 )}
//             </div>

//             {/* Right Side Elements */}
//             <div className="hidden lg:flex items-center gap-4">
//                 <a href="mailto:ashoka@gmail.com" className=" text-gray-600 hover:text-gray-800 no-underline text-xs items-center">
//                     ashokafae@gmail.com
//                 </a>
//                 {!isLoggedIn && (
//                     <Link
//                         to="/authUser"
//                         className="bg-secondary text-white px-4 py-2 font-rounded capitalize  rounded no-underline text-xs cursor-pointer hover:bg-slate-500 transition duration-300"
//                     >
//                         Sign Up
//                     </Link>
//                 )}
//             </div>

//             {/* Hamburger Menu Button */}
//             <button
//                 id="hamburger-button"
//                 onClick={toggleMenu}
//                 className="lg:hidden p-2 text-black no-underline text-xs hover:text-gray-600 bg-transparent border-0 focus:outline-none"
//             >
//                 {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div id="mobile-menu" className="lg:hidden bg-white absolute top-14 left-0 w-full shadow-md">
//                     <div className="px-6 pt-2 pb-4 space-y-4">
//                         {navItems.map((item, index) => {
//                             const path = `/${item.toLowerCase().replace(' ', '-')}`;
//                             const isActive = location.pathname === path; // Check if the current path matches

//                             return (
//                                 <div className="relative" key={index}>
//                                     <Link
//                                         to={path}
//                                         className={`block text-black no-underline  text-lg hover:text-gray-600 py-2 font-rounded capitalize  transition duration-300 text-center ${isActive ? 'bg-green-500 text-white' : ''}`}
//                                     >
//                                         {item}
//                                     </Link>
//                                 </div>
//                             );
//                         })}

//                         {isLoggedIn && (
//                             <>
//                                 {isAdmin && (
//                                     <Link to="/admin" className={`block text-black no-underline text-xs  hover:text-gray-600 py-2 font-rounded capitalize  transition duration-300 text-center ${location.pathname === '/admin' ? 'bg-green-500 text-white' : ''}`}>
//                                         ADMIN
//                                     </Link>
//                                 )}
//                                 <button
//                                     onClick={handleLogout}
//                                     className="block w-full text-black no-underline text-xs hover:text-gray-600 py-2 font-rounded capitalize  transition duration-300 bg-transparent text-center"
//                                 >
//                                     LOGOUT
//                                 </button>
//                             </>
//                         )}

//                         {isLoggedIn && (
//                             <>
//                                 <Link to="/account" className={`block text-black no-underline text-lg hover:text-gray-600 py-2 font-rounded capitalize  transition duration-300 text-center ${location.pathname === '/account' ? 'bg-green-500 text-white' : ''}`}>
//                                     ACCOUNT
//                                 </Link>

//                             </>
//                         )}
//                         <Link
//                                     to="/authUser"
//                                     className="block text-center bg-secondary text-white px-6 py-2 font-rounded capitalize  rounded hover:bg-slate-500 transition duration-300 no-underline text-xs cursor-pointer"
//                                 >
//                                     Sign Up
//                                 </Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };


// export default Navbar;

// =================================================================================

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useAuth } from '../../utils/AuthContext'; // Import the useAuth hook

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation(); // Get the current location object
//     const { user, logout } = useAuth(); // Get user and logout from AuthContext

//     // Derived state from context
//     const isLoggedIn = !!user;
//     const isAdmin = user?.role === 'admin';

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             const menu = document.getElementById('mobile-menu');
//             const button = document.getElementById('hamburger-button');
//             if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
//                 setIsMenuOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleLogout = () => {
//         logout(); // This will clear local storage and update the context
//         navigate('/');
//     };

//     const navItems = ["HOME", "EVENTS", "OUR SERVICES", "GALLERY", "ABOUT", "CONTACT"];

//     return (
//         <nav className="sticky top-0 left-0 w-full h-14 shadow-md z-50 flex items-center justify-between px-4 lg:px-6 bg-white">
//             {/* Logo */}
//             <div className="flex items-center">
//                 <Link to="/" className="block h-12">
//                     <img
//                         src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1738000071/ashoka-events-logo_juz99g.png"
//                         alt="Ashoka"
//                         className="h-12 w-auto object-contain"
//                     />
//                 </Link>
//             </div>

//             {/* Centered Navigation */}
//             <div className="hidden lg:flex flex-1 justify-center items-center gap-6 tracking-widest">
//                 {navItems.map((item, index) => {
//                     const path = `/${item.toLowerCase().replace(' ', '-')}`;
//                     const isActive = location.pathname === path; // Check if the current path matches

//                     return (
//                         <div className="relative group" key={index}>
//                             <Link
//                                 to={path}
//                                 className={`text-black no-underline text-xs hover:text-gray-800 hover:font-bold transition duration-200 ${isActive ? 'text-green-500 font-bold' : ''}`}
//                             >
//                                 {item}
//                             </Link>
//                             {item === "EVENTS" && (
//                                 <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg min-w-[200px]">
//                                     <div className="relative group/nested">
//                                         <Link to="/events/wedding-event" className="block text-xs px-4 py-2 font-rounded capitalize text-black no-underline  hover:bg-gray-200">
//                                             Wedding Event
//                                         </Link>
//                                         <div className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg min-w-[200px] no-underline text-xs">
//                                             <Link to="/events/haldi-decoar" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Haldi Decoar</Link>
//                                             <Link to="/events/mehndi-ceremony" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Mehndi Ceremony</Link>
//                                             <Link to="/events/reception-stage" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Reception Stage</Link>
//                                             <Link to="/events/entrance-gate" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Entrance Gate</Link>
//                                             <Link to="/events/vidhi-mandap" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Vidhi Mandap</Link>
//                                             <Link to="/events/special-entry" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Special Entry</Link>
//                                             <Link to="/events/photo-booth" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Photo Booth</Link>
//                                         </div>
//                                     </div>
//                                     <Link to="/events/engagement-event" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Engagement Event</Link>
//                                     <Link to="/events/anniversary-ceremony" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Anniversary Ceremony</Link>
//                                     <Link to="/events/birthday-party" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Birthday Party</Link>
//                                     <Link to="/events/baby-shower" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Baby Shower</Link>
//                                 </div>
//                             )}
//                         </div>
//                     );
//                 })}


//                 {isLoggedIn && (
//                     <>
//                         {isAdmin && (
//                             <Link to="/admin" className={`text-black no-underline text-xs hover:text-gray-600 transition duration-300 ${location.pathname === '/admin' ? 'text-green-500 font-bold' : ''}`}>
//                                 ADMIN
//                             </Link>
//                         )}
//                         <div
//                             onClick={handleLogout}
//                             className="text-black no-underline text-xs  hover:text-gray-600 transition duration-300 border-none tracking-widest bg-transparent cursor-pointer"
//                         >
//                             LOGOUT
//                         </div>
//                     </>
//                 )}
//             </div>

//             {/* Right Side Elements */}
//             <div className="hidden lg:flex items-center gap-4">
//                 <a href="mailto:ashoka@gmail.com" className=" text-gray-600 hover:text-gray-800 no-underline text-xs items-center">
//                     ashokafae@gmail.com
//                 </a>
//                 {!isLoggedIn && (
//                     <Link
//                         to="/authUser"
//                         className="bg-secondary text-white px-4 py-2 font-rounded capitalize  rounded no-underline text-xs cursor-pointer hover:bg-slate-500 transition duration-300"
//                     >
//                         Sign Up
//                     </Link>
//                 )}
//             </div>

//             {/* Hamburger Menu Button */}
//             <button
//                 id="hamburger-button"
//                 onClick={toggleMenu}
//                 className="lg:hidden p-2 text-black no-underline text-xs hover:text-gray-600 bg-transparent border-0 focus:outline-none"
//             >
//                 {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div id="mobile-menu" className="lg:hidden bg-white absolute top-14 left-0 w-full shadow-md">
//                     <div className="px-6 pt-2 pb-4 space-y-4">
//                         {navItems.map((item, index) => {
//                             const path = `/${item.toLowerCase().replace(' ', '-')}`;
//                             const isActive = location.pathname === path; // Check if the current path matches

//                             return (
//                                 <div className="relative" key={index}>
//                                     <Link
//                                         to={path}
//                                         className={`block text-black no-underline  text-lg hover:text-gray-600 py-2 font-rounded capitalize  transition duration-300 text-center ${isActive ? 'bg-green-500 text-white' : ''}`}
//                                     >
//                                         {item}
//                                     </Link>
//                                 </div>
//                             );
//                         })}

//                         {isLoggedIn && (
//                             <>
//                                 {isAdmin && (
//                                     <Link to="/admin" className={`block text-black no-underline text-xs  hover:text-gray-600 py-2 font-rounded capitalize  transition duration-300 text-center ${location.pathname === '/admin' ? 'bg-green-500 text-white' : ''}`}>
//                                         ADMIN
//                                     </Link>
//                                 )}
//                                 <button
//                                     onClick={handleLogout}
//                                     className="block w-full text-black no-underline text-xs hover:text-gray-600 py-2 font-rounded capitalize  transition duration-300 bg-transparent text-center"
//                                 >
//                                     LOGOUT
//                                 </button>
//                             </>
//                         )}

//                         {isLoggedIn && (
//                             <>
//                                 <Link to="/account" className={`block text-black no-underline text-lg hover:text-gray-600 py-2 font-rounded capitalize  transition duration-300 text-center ${location.pathname === '/account' ? 'bg-green-500 text-white' : ''}`}>
//                                     ACCOUNT
//                                 </Link>

//                             </>
//                         )}
//                         {!isLoggedIn && (
//                             <Link
//                                 to="/authUser"
//                                 className="block text-center bg-secondary text-white px-6 py-2 font-rounded capitalize  rounded hover:bg-slate-500 transition duration-300 no-underline text-xs cursor-pointer"
//                             >
//                                 Sign Up
//                             </Link>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useAuth } from '../../utils/AuthContext'; // Import the useAuth hook

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileExpandedItems, setMobileExpandedItems] = useState({});
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location object
    const { user, logout } = useAuth(); // Get user and logout from AuthContext

    // Derived state from context
    const isLoggedIn = !!user;
    const isAdmin = user?.role === 'admin';

    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('hamburger-button');
            if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleMobileExpandedItem = (item) => {
        setMobileExpandedItems(prev => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    const toggleMobileNestedItem = (item) => {
        setMobileExpandedItems(prev => ({
            ...prev,
            [`nested-${item}`]: !prev[`nested-${item}`]
        }));
    };

    const handleLogout = () => {
        logout(); // This will clear local storage and update the context
        navigate('/');
    };

    const navItems = ["HOME", "EVENTS", "OUR SERVICES", "GALLERY", "ABOUT", "CONTACT"];

    return (
        <nav className="sticky top-0 left-0 w-full h-14 shadow-md z-50 flex items-center justify-between px-4 lg:px-6 bg-white">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/" className="block h-12">
                    <img
                        src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1738000071/ashoka-events-logo_juz99g.png"
                        alt="Ashoka"
                        className="h-12 w-auto object-contain"
                    />
                </Link>
            </div>

            {/* Centered Navigation */}
            <div className="hidden lg:flex flex-1 justify-center items-center gap-6 tracking-widest">
                {navItems.map((item, index) => {
                    const path = `/${item.toLowerCase().replace(' ', '-')}`;
                    const isActive = location.pathname === path; // Check if the current path matches

                    return (
                        <div className="relative group" key={index}>
                            <Link
                                to={path}
                                className={`text-black no-underline text-xs hover:text-gray-800 hover:font-bold transition duration-200 ${isActive ? 'text-green-500 font-bold' : ''}`}
                            >
                                {item}
                            </Link>
                            {item === "EVENTS" && (
                                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg min-w-[200px]">
                                    <div className="relative group/nested">
                                        <Link to="/events/wedding-event" className="block text-xs px-4 py-2 font-rounded capitalize text-black no-underline  hover:bg-gray-200">
                                            Wedding Event
                                        </Link>
                                        <div className="absolute left-full top-0 hidden group-hover/nested:block bg-white shadow-lg min-w-[200px] no-underline text-xs">
                                            <Link to="/events/haldi-decoar" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Haldi Decoar</Link>
                                            <Link to="/events/mehndi-ceremony" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Mehndi Ceremony</Link>
                                            <Link to="/events/reception-stage" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Reception Stage</Link>
                                            <Link to="/events/entrance-gate" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Entrance Gate</Link>
                                            <Link to="/events/vidhi-mandap" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Vidhi Mandap</Link>
                                            <Link to="/events/special-entry" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Special Entry</Link>
                                            <Link to="/events/photo-booth" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Photo Booth</Link>
                                        </div>
                                    </div>
                                    <Link to="/events/engagement-event" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Engagement Event</Link>
                                    <Link to="/events/anniversary-ceremony" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Anniversary Ceremony</Link>
                                    <Link to="/events/birthday-party" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Birthday Party</Link>
                                    <Link to="/events/baby-shower" className="block px-4 py-2 font-rounded capitalize  text-black no-underline text-xs hover:bg-gray-200">Baby Shower</Link>
                                </div>
                            )}
                        </div>
                    );
                })}


            </div>

            {/* Right Side Elements */}
            <div className="hidden lg:flex items-center gap-4">
                {/* <a href="mailto:ashoka@gmail.com" className=" text-gray-600 hover:text-gray-800 no-underline text-xs items-center">
                    ashokafae@gmail.com
                </a> */}
                {!isLoggedIn && (
                    <Link
                        to="/authUser"
                        className="bg-secondary text-white px-4 py-2 font-rounded capitalize  rounded no-underline text-xs cursor-pointer hover:bg-slate-500 transition duration-300"
                    >
                        Sign Up
                    </Link>
                )}

                {isLoggedIn && (
                    <>
                        {isAdmin && (
                            <Link to="/admin"
                                >
                                <button className="bg-yellow-500 text-white px-4 py-2 font-rounded capitalize  rounded no-underline text-xs cursor-pointer border-2 border-yellow-600 hover:bg-slate-500 hover:border-slate-600 transition duration-400">
                                    ADMIN
                                </button>

                            </Link>
                        )}
                        <button
                            onClick={handleLogout}
                            className=" bg-secondary text-white px-2 py-2 font-rounded tracking-wider rounded no-underline text-xs border-secondary cursor-pointer hover:bg-slate-500 transition duration-400"
                        >
                            LOGOUT
                        </button>
                    </>
                )}
            </div>

            {/* Hamburger Menu Button */}
            <button
                id="hamburger-button"
                onClick={toggleMenu}
                className="lg:hidden p-2 text-black no-underline text-xs hover:text-gray-600 bg-transparent border-0 focus:outline-none"
            >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="lg:hidden bg-white absolute top-14 left-0 w-full shadow-md">
                    <div className="px-6 pt-2 pb-4 space-y-4">
                        {navItems.map((item, index) => {
                            const path = `/${item.toLowerCase().replace(' ', '-')}`;
                            const isActive = location.pathname === path; // Check if the current path matches
                            const isExpanded = mobileExpandedItems[item];

                            return (
                                <div className="relative" key={index}>
                                    {item === "EVENTS" ? (
                                        <div className="w-full">
                                            <div
                                                className={`flex justify-center items-center text-black no-underline text-lg hover:text-gray-600 py-2 font-rounded capitalize transition duration-300 ${isActive ? 'bg-green-500 text-white' : ''}`}
                                                onClick={() => toggleMobileExpandedItem(item)}
                                            >
                                                <span className="pl-2">{item}</span>
                                                {isExpanded ? <MdKeyboardArrowDown size={24} /> : <MdKeyboardArrowRight size={24} />}
                                            </div>

                                            {isExpanded && (
                                                <div className="pl-4 mt-1 border-l-2 border-gray-200">
                                                    <div className="w-full">
                                                        <div
                                                            className="flex justify-between items-center text-black no-underline text-base py-2 font-rounded capitalize"
                                                            onClick={() => toggleMobileNestedItem('wedding')}
                                                        >
                                                            <span>Wedding Event</span>
                                                            {mobileExpandedItems['nested-wedding'] ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
                                                        </div>

                                                        {mobileExpandedItems['nested-wedding'] && (
                                                            <div className="pl-4 border-l-2 border-gray-200">
                                                                <Link to="/events/haldi-decoar" className="block py-2 text-black no-underline text-sm">Haldi Decoar</Link>
                                                                <Link to="/events/mehndi-ceremony" className="block py-2 text-black no-underline text-sm">Mehndi Ceremony</Link>
                                                                <Link to="/events/reception-stage" className="block py-2 text-black no-underline text-sm">Reception Stage</Link>
                                                                <Link to="/events/entrance-gate" className="block py-2 text-black no-underline text-sm">Entrance Gate</Link>
                                                                <Link to="/events/vidhi-mandap" className="block py-2 text-black no-underline text-sm">Vidhi Mandap</Link>
                                                                <Link to="/events/special-entry" className="block py-2 text-black no-underline text-sm">Special Entry</Link>
                                                                <Link to="/events/photo-booth" className="block py-2 text-black no-underline text-sm">Photo Booth</Link>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <Link to="/events/engagement-event" className="block text-black no-underline text-base py-2">Engagement Event</Link>
                                                    <Link to="/events/anniversary-ceremony" className="block text-black no-underline text-base py-2">Anniversary Ceremony</Link>
                                                    <Link to="/events/birthday-party" className="block text-black no-underline text-base py-2">Birthday Party</Link>
                                                    <Link to="/events/baby-shower" className="block text-black no-underline text-base py-2">Baby Shower</Link>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={path}
                                            className={`block text-black no-underline text-lg hover:text-gray-600 py-2 font-rounded capitalize transition duration-300 text-center ${isActive ? 'bg-green-500 text-white' : ''}`}
                                        >
                                            {item}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}

                        {/* {isLoggedIn && (
                            <>
                                {isAdmin && (
                                    <Link to="/admin" className={`block py-2 text-black no-underline text-sm  hover:text-gray-600 font-rounded capitalize transition duration-300 text-center ${location.pathname === '/admin' ? 'bg-green-500 text-white' : ''}`}>
                                        ADMIN
                                    </Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-black no-underline text-xs hover:text-gray-600 py-2 font-rounded capitalize transition duration-300 bg-transparent text-center"
                                >
                                    LOGOUT
                                </button>
                            </>
                        )} */}

                        {/* {isLoggedIn && (
                            <>
                                <Link to="/account" className={`block text-black no-underline text-lg hover:text-gray-600 py-2 font-rounded capitalize transition duration-300 text-center ${location.pathname === '/account' ? 'bg-green-500 text-white' : ''}`}>
                                    ACCOUNT
                                </Link>
                            </>
                        )} */}
                        {!isLoggedIn && (
                            <Link
                                to="/authUser"
                                className="block text-center bg-secondary text-white px-6 py-2 font-rounded capitalize rounded hover:bg-slate-500 transition duration-300 no-underline text-xs cursor-pointer"
                            >
                                Sign Up
                            </Link>
                        )}

                        {isLoggedIn && (
                            <>
                                {isAdmin && (
                                    <Link to="/admin" className={`block py-2 text-black no-underline text-sm  hover:text-gray-600 font-rounded capitalize transition duration-300 text-center ${location.pathname === '/admin' ? 'bg-green-500 text-white' : ''}`}>
                                        ADMIN
                                    </Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-black no-underline text-xs hover:text-gray-600 py-2 font-rounded capitalize transition duration-300 bg-transparent text-center"
                                >
                                    LOGOUT
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;