// import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { LogOut, Settings, Shield, UserCircle, ChevronDown } from 'lucide-react';

// const EnhancedProfileDropdown = ({ user, onLogout, isAdmin }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     return (
//         <div className="relative" ref={dropdownRef}>
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex items-center gap-2 py-2 px-3 rounded-full bg-secondary transition-all duration-200"
//                 aria-expanded={isOpen}
//                 aria-haspopup="true"
//             >
//                 <UserCircle className="w-5 h-5" />
//                 <ChevronDown
//                     className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//                 />
//             </button>

//             <div
//                 className={`absolute right-0 mt-2 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 origin-top-right
//                 ${isOpen
//                     ? 'transform opacity-100 scale-100'
//                     : 'transform opacity-0 scale-95 pointer-events-none'
//                 }`}
//             >
//                 <div>
//                     {/* <Link
//                         to="/account"
//                         className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
//                     >
//                         <Settings className="w-4 h-4 text-gray-500" />
//                         <span>Account</span>
//                     </Link> */}

//                     {isAdmin && (
//                         <Link
//                             to="/admin-auth-page"
//                             className="flex items-center gap-2 px-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
//                         >
//                             {/* <Shield className="w-4 h-4 text-indigo-600" /> */}
//                             <span>Admin</span>
//                         </Link>
//                     )}
                    
//                 </div>

//                 <div className="border-none bg-transparent">
//                     <button
//                         onClick={() => {
//                             onLogout();
//                             setIsOpen(false);
//                         }}
//                         className="text-center justify-center border-none bg-transparent flex items-center py-2 text-sm text-red-600 hover:cursor-pointer transition-colors duration-150"
//                     >
//                         <LogOut className="w-4 h-4" />
//                         <span>Log Out</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EnhancedProfileDropdown;


import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Settings, Shield, UserCircle, ChevronDown } from 'lucide-react';

const EnhancedProfileDropdown = ({ user, onLogout, isAdmin }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 py-1 px-2 rounded-full transition-all duration-200 bg-secondary"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {user.avatar ? (
                    <img 
                        src={user.avatar} 
                        alt={user.name || 'User'} 
                        className="w-8 h-8 rounded-full object-cover border border-gray-200"
                    />
                ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                        <UserCircle className="w-5 h-5" />
                    </div>
                )}
                <ChevronDown
                    className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`absolute right-0 mt-2 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 origin-top-right 
                ${isOpen
                    ? 'transform opacity-100 scale-100'
                    : 'transform opacity-0 scale-95 pointer-events-none'
                }`}
            >
                {/* User info section */}
                {/* <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        {user.avatar ? (
                            <img 
                                src={user.avatar} 
                                alt={user.fullName || 'User'} 
                                className="w-10 h-10 rounded-full object-cover border border-gray-200"
                            />
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                                <UserCircle className="w-6 h-6" />
                            </div>
                        )}
                        <div>
                            <div className="font-medium text-gray-900">{user.fullName || user.name}</div>
                            <div className="text-sm text-gray-500 truncate">{user.email}</div>
                        </div>
                    </div>
                </div> */}

                {/* Menu items */}
                <div className="py-1">
                    <Link
                        to="/account"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 no-underline hover:bg-gray-50 transition-colors duration-150"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* <Settings className="w-4 h-4 text-gray-500" /> */}
                        <span>Account</span>
                    </Link>

                    {isAdmin && (
                        <Link
                            to="/admin-auth-page"
                            className="flex items-center gap-2 px-4 py-2 text-sm no-underline text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                            onClick={() => setIsOpen(false)}
                        >
                            {/* <Shield className="w-4 h-4 text-indigo-600" /> */}
                            <span>Admin</span>
                        </Link>
                    )}
                </div>

                {/* Sign out section */}
                <div className="border-gray-100">
                    <button
                        onClick={() => {
                            onLogout();
                            setIsOpen(false);
                        }}
                        className="flex w-full items-center gap-2 px-4 py-1 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150 border-none bg-transparent hover:cursor-pointer"
                    >
                        LogOut
                        {/* <LogOut className="w-4 h-4" /> */}
                        {/* <span>Log Out</span> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnhancedProfileDropdown;