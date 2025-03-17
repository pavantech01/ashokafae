import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Down Arrow Icon


const LandingPage = () => {
    return (
        <div
            className="relative w-full h-screen flex flex-col justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542790/Sideview_decor_cmqvli.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative text-center text-white px-5">
                <h1 className="text-4xl md:text-6xl font-medium font-dancing">
                    We Will Plan Details About <br /> Your Wedding
                </h1>
                <button className="mt-6 px-6 py-3 bg-green-500 rounded-full text-lg  cursor-pointer">
                    <FaPhoneAlt className="text-blue-500" />&nbsp; <span className="text-white">(406) 555-0120</span>
                </button>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-5 text-white text-sm tracking-widest">
            <div>
                <p className="text-center text-white text-xl animate-bounce cursor-pointer">
                SCROLL DOWN
                </p>
                <FontAwesomeIcon icon={faChevronDown} className="text-white text-3xl mt-2 animate-bounce cursor-pointer pl-16" />

            </div>
                            
            </div>
        </div>
    );
};

export default LandingPage;
