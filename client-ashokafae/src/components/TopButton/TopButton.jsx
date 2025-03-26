import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

function TopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed bottom-2 right-2 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <button className="rounded-full p-1 w-8 h-8 bg-secondary hover:bg-slate-500 text-white font-bold transition duration-300 ease-in-out" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <FaAngleUp size={15} />
            </button>
        </div>
    );
}

export default TopButton;
