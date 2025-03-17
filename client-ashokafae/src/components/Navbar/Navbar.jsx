// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [isAdmin, setIsAdmin] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const user = localStorage.getItem('user');
//         if (user) {
//             setIsLoggedIn(true);
//             const parsedUser = JSON.parse(user);
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
//         navigate('/');
//     };

//     return (

//         <nav className="absolute top-0 left-0 w-full h-20 shadow-md z-50 backdrop-blur-3xl flex items-center">

//     <div className="w-full flex items-center justify-between px-4 lg:px-6">
//         {/* Logo  */}
//         <div className="pl-2 sm:pl-4">
//             <Link to="/" className="block h-12">
//                 <img
//                     src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1738000071/ashoka-events-logo_juz99g.png"
//                     alt="Ashoka"
//                     className="h-12 w-auto object-contain"
//                 />
//             </Link>
//         </div>

//         {/* Centered Navigation */}
//         <div className="hidden lg:flex flex-1 justify-center items-center gap-6 px-4 tracking-widest">
//             <Link to="/" className="text-black no-underline text-2xl hover:text-gray-300 transition">HOME</Link>
//             <Link to="/about" className="text-black no-underline text-2xl hover:text-gray-300 transition">ABOUT</Link>
//             <Link to="/services" className="text-white no-underline text-2xl hover:text-gray-300 transition">SERVICES</Link>
//             <Link to="/gallery" className="text-white no-underline text-2xl hover:text-gray-300 transition">GALLERY</Link>
//             <Link to="/contact" className="text-white no-underline text-2xl hover:text-gray-300 transition">CONTACT</Link>
//             <Link to="/account" className="text-white no-underline text-2xl hover:text-gray-300 transition">ACCOUNT</Link>

//             {isLoggedIn && (
//                 <>
//                     {isAdmin && (
//                         <Link to="/admin" className="text-white hover:text-gray-300 transition">ADMIN</Link>
//                     )}
//                     <button
//                         onClick={handleLogout}
//                         className="text-white hover:text-gray-300 transition bg-transparent border-none"
//                     >
//                         LOGOUT
//                     </button>
//                 </>
//             )}
//         </div>

//         {/* Right Side Elements - Fixed to Right Edge */}
//         <div className="hidden lg:flex items-center gap-2 pr-2 sm:pr-4">
//             {!isLoggedIn && (
//                 <Link
//                     to="/authUser"
//                     className="bg-emerald-500 text-2xl text-white px-6 py-2 no-underline rounded hover:bg-emerald-600 transition whitespace-nowrap"
//                 >
//                     Sign Up
//                 </Link>
//             )}
//         </div>

//         {/* Hamburger Menu Button */}
//         <button
//             id="hamburger-button"
//             onClick={toggleMenu}
//             className="lg:hidden p-2 mr-2 text-white hover:text-gray-300 bg-transparent border-0 focus:outline-none"
//         >
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//     </div>

//     {/* Mobile Menu */}
//     {isMenuOpen && (
//         <div id="mobile-menu" className="lg:hidden bg-black/95 backdrop-blur-sm absolute w-full">
//             <div className="px-6 pt-2 pb-4 space-y-4">
//                 <Link to="/" className="block text-white hover:text-gray-300 py-2 transition">HOME</Link>
//                 <Link to="/services" className="block text-white hover:text-gray-300 py-2 transition">SERVICES</Link>
//                 <Link to="/gallery" className="block text-white hover:text-gray-300 py-2 transition">GALLERY</Link>
//                 <Link to="/about" className="block text-white hover:text-gray-300 py-2 transition">ABOUT</Link>
//                 <Link to="/contact" className="block text-white hover:text-gray-300 py-2 transition">CONTACT</Link>
//                 <Link to="/account" className="block text-white hover:text-gray-300 py-2 transition">ACCOUNT</Link>

//                 {isLoggedIn && (
//                     <>
//                         {isAdmin && (
//                             <Link to="/admin" className="block text-white hover:text-gray-300 py-2 transition">ADMIN</Link>
//                         )}
//                         <button
//                             onClick={handleLogout}
//                             className="block w-full text-left text-white hover:text-gray-300 py-2 transition bg-transparent"
//                         >
//                             LOGOUT
//                         </button>
//                     </>
//                 )}

//                 {!isLoggedIn && (
//                     <Link
//                         to="/authUser"
//                         className="block text-center bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition"
//                     >
//                         Sign Up
//                     </Link>
//                 )}
//             </div>
//         </div>
//     )}
// </nav>

//     );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
            const parsedUser = JSON.parse(user);
            setIsAdmin(parsedUser.role === 'admin');
        }
    }, []);

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

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        setIsAdmin(false);
        navigate('/');
    };

    return (
        <nav className="absolute top-0 left-0 w-full h-20 shadow-md z-50 backdrop-blur-lg bg-white/30 flex items-center">

            <div className="w-full flex items-center justify-between px-4 lg:px-6">
                {/* Logo */}
                <div className="pl-2 sm:pl-4">
                    <Link to="/" className="block h-12">
                        <img
                            src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1738000071/ashoka-events-logo_juz99g.png"
                            alt="Ashoka"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Centered Navigation */}
                <div className="hidden lg:flex flex-1 justify-center font-rounded items-center gap-6 px-4 tracking-widest">
                    {["HOME", "ABOUT", "SERVICES", "GALLERY", "CONTACT", "ACCOUNT"].map((item, index) => (
                        <Link 
                            key={index} 
                            to={`/${item.toLowerCase()}`} 
                            className="text-black text-2xl no-underline hover:text-gray-600 transition duration-300"
                        >
                            {item}
                        </Link>
                    ))}

                    {isLoggedIn && (
                        <>
                            {isAdmin && (
                                <Link to="/admin" className="text-black text-2xl hover:text-gray-600 transition duration-300">
                                    ADMIN
                                </Link>
                            )}
                            <button
                                onClick={handleLogout}
                                className="text-black text-2xl hover:text-gray-600 transition duration-300 bg-transparent border-none"
                            >
                                LOGOUT
                            </button>
                        </>
                    )}
                </div>

                {/* Right Side Elements */}
                <div className="hidden lg:flex items-center gap-2 pr-2 sm:pr-4">
                    {!isLoggedIn && (
                        <Link
                            to="/authUser"
                            className="bg-emerald-500 text-2xl text-white px-6 py-2 no-underline rounded hover:bg-emerald-600 transition duration-300"
                        >
                            Sign Up
                        </Link>
                    )}
                </div>

                {/* Hamburger Menu Button */}
                <button
                    id="hamburger-button"
                    onClick={toggleMenu}
                    className="lg:hidden p-2 mr-2 text-black hover:text-gray-600 bg-transparent border-0 focus:outline-none"
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="lg:hidden bg-white/90 backdrop-blur-md absolute w-full shadow-md">
                    <div className="px-6 pt-2 pb-4 space-y-4">
                        {["HOME", "ABOUT", "SERVICES", "GALLERY", "CONTACT", "ACCOUNT"].map((item, index) => (
                            <Link 
                                key={index} 
                                to={`/${item.toLowerCase()}`} 
                                className="block text-black text-lg hover:text-gray-600 py-2 transition duration-300"
                            >
                                {item}
                            </Link>
                        ))}

                        {isLoggedIn && (
                            <>
                                {isAdmin && (
                                    <Link to="/admin" className="block text-black text-lg hover:text-gray-600 py-2 transition duration-300">
                                        ADMIN
                                    </Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left text-black text-lg hover:text-gray-600 py-2 transition duration-300 bg-transparent"
                                >
                                    LOGOUT
                                </button>
                            </>
                        )}

                        {!isLoggedIn && (
                            <Link
                                to="/authUser"
                                className="block text-center bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600 transition duration-300"
                            >
                                Sign Up
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
