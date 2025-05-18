import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, ChevronDown, Settings, Shield } from 'lucide-react';

export const ProfileDropdown = ({ user, onLogout, isAdmin = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleAdminDashboard = () => {
        // Navigate to admin dashboard
        window.location.href = '/admin-auth-page';
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 py-1.5 px-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white overflow-hidden">
                    {user.avatar ? (
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <User size={18} />
                    )}
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">
                    {user.name}
                </span>
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 origin-top-right ${isOpen
                        ? 'transform opacity-100 scale-100'
                        : 'transform opacity-0 scale-95 pointer-events-none'
                    }`}
            >
                <div className="py-2 px-3 border-b border-gray-100">
                    <div className="font-medium text-sm text-gray-900">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                </div>

                <div className="py-1">
                    {isAdmin && (
                        <button
                            onClick={handleAdminDashboard}
                            className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                        >
                            <Shield size={16} className="text-indigo-600" />
                            <span>Admin Dashboard</span>
                        </button>
                    )}

                    <button
                        onClick={() => {
                            // Handle settings click
                            window.location.href = '/settings';
                            setIsOpen(false);
                        }}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                    >
                        <Settings size={16} className="text-gray-500" />
                        <span>Account Settings</span>
                    </button>
                </div>

                <div className="py-1 border-t border-gray-100">
                    <button
                        onClick={() => {
                            onLogout();
                            setIsOpen(false);
                        }}
                        className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                    >
                        <LogOut size={16} className="text-red-500" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
};