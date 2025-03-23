import React from "react";
import { FaCamera, FaSeedling, FaMapPin, FaMusic, FaUtensils, FaPalette } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4 py-10">
            {/* Page Title */}
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Services</h2>
                <p className="text-gray-600 mt-2 max-w-lg">
                    We offer a comprehensive range of wedding planning services to make your special day perfect.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-4xl">
                {[
                    { icon: <FaCamera size={28} className="text-green-500" />, title: "Photography & Video", description: "Capture every precious moment with our professional services." },
                    { icon: <FaSeedling size={28} className="text-green-500" />, title: "Floral Arrangements", description: "Beautiful and elegant floral designs to match your wedding theme." },
                    { icon: <FaMapPin size={28} className="text-green-500" />, title: "Venue Selection", description: "Find the perfect location for your dream wedding." },
                    { icon: <FaMusic size={28} className="text-green-500" />, title: "Entertainment", description: "Professional DJs and live music options for your event." },
                    { icon: <FaUtensils size={28} className="text-green-500" />, title: "Catering", description: "Exquisite menu options and professional catering services." },
                    { icon: <FaPalette size={28} className="text-green-500" />, title: "Decor & Styling", description: "Transform your venue with stunning decorations." },
                ].map((service, index) => (
                    <div key={index} className="bg-white rounded-md shadow-sm p-4 sm:p-6 transition-all duration-200 hover:shadow-md flex flex-col items-center text-center">
                        <div className="mb-2 p-2 bg-green-100 rounded-full">{service.icon}</div>
                        <h3 className="text-md sm:text-lg font-semibold mb-1 text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2">{service.description}</p>
                        <Link to="/gallery" className="text-white no-underline w-full sm:w-auto">
                            <button className="px-4 py-1.5 text-sm border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-200">
                                Learn More
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
