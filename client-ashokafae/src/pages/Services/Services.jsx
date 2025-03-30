import React from "react";
import { FaCamera, FaSeedling, FaMapPin, FaMusic, FaUtensils, FaPalette } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center">
            {/* Page Title */}

            <div className="relative h-[400px] min-w-full mb-10">
                <img
                    src="https://plus.unsplash.com/premium_photo-1661477577453-2736f4c0acf6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                            We offer a comprehensive range of wedding planning services to make your special day perfect.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-4xl mb-10">
                {[
                    { icon: <FaCamera size={28} className="text-secondary" />, title: "Photography & Video", description: "Capture every precious moment with our professional services." },
                    { icon: <FaSeedling size={28} className="text-secondary" />, title: "Floral Arrangements", description: "Beautiful and elegant floral designs to match your wedding theme." },
                    { icon: <FaMapPin size={28} className="text-secondary" />, title: "Venue Selection", description: "Find the perfect location for your dream wedding." },
                    { icon: <FaMusic size={28} className="text-secondary" />, title: "Entertainment", description: "Professional DJs and live music options for your event." },
                    { icon: <FaUtensils size={28} className="text-secondary" />, title: "Catering", description: "Exquisite menu options and professional catering services." },
                    { icon: <FaPalette size={28} className="text-secondary" />, title: "Decor & Styling", description: "Transform your venue with stunning decorations." },
                ].map((service, index) => (
                    <div key={index} className="bg-white rounded-md shadow-sm p-4 sm:p-6 transition-all duration-200 hover:shadow-md flex flex-col items-center text-center">
                        <div className="mb-2 p-2 bg-green-100 rounded-full">{service.icon}</div>
                        <h3 className="text-md sm:text-lg font-semibold mb-1 text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2">{service.description}</p>
                        <Link to="/gallery" className="text-white no-underline w-full sm:w-auto">
                            <button className="px-4 py-1.5 text-sm border-2 border-secondary text-white bg-secondary rounded-full hover:bg-gray-200 hover:text-secondary transition-all duration-200">
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
