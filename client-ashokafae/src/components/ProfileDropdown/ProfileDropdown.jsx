import React, { useState, useRef, useEffect } from 'react';

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
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
            <img
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full cursor-pointer"
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" 
                alt="User avatar"
            />

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
                    <ul className="py-2 text-sm text-gray-700">
                        <li className='list-none'>
                            <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                    <div className="py-1">
                        <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                            Sign out
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;