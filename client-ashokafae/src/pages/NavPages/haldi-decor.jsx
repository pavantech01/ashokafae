import React from 'react';
import { Calendar, Gift, Package, Star, Phone, Camera, Sparkles } from 'lucide-react';

function HaldiDecor() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
            {/* Hero Section */}
            <div className="relative h-[600px]">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Haldi_Rasm_at_Indian_Wedding.jpg"
                    alt="Haldi Ceremony"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-orange-500/30">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl font-bold mb-4">
                                Traditional Haldi Ceremony
                            </h1>
                            <p className="text-xl mb-8">
                                Experience the vibrant traditions of the Haldi ceremony with our exquisite decor
                            </p>
                            <button className="bg-white text-yellow-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-50 transition duration-300">
                                Plan Your Haldi
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Our Haldi Decorations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Haldi_Rasm_at_Indian_Wedding.jpg"
                                alt="Traditional Haldi Setup"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Haldi_Rasm_at_Indian_Wedding.jpg"
                                alt="Modern Haldi Decor"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Haldi_Rasm_at_Indian_Wedding.jpg"
                                alt="Contemporary Haldi Setup"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Our Haldi Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Traditional Setup</h3>
                            <p className="text-gray-600">
                                Authentic traditional Haldi ceremony arrangements
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Package className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Complete Packages</h3>
                            <p className="text-gray-600">
                                All-inclusive Haldi ceremony services
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Custom Themes</h3>
                            <p className="text-gray-600">
                                Personalized decor themes and setups
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Haldi Ceremony Packages
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Haldi_Rasm_at_Indian_Wedding.jpg"
                                alt="Basic Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Traditional Package</h3>
                                <p className="text-gray-600 mb-4">
                                    Classic Haldi ceremony setup
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Basic decorations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        2-hour ceremony
                                    </li>
                                </ul>
                                <button className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105">
                            <div className="bg-yellow-600 text-white text-center py-2">
                                Most Popular
                            </div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Haldi_Rasm_at_Indian_Wedding.jpg"
                                alt="Premium Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Premium Package</h3>
                                <p className="text-gray-600 mb-4">
                                    Enhanced ceremony experience
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Premium decorations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        3-hour ceremony
                                    </li>
                                </ul>
                                <button className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Haldi_Rasm_at_Indian_Wedding.jpg"
                                alt="Luxury Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Luxury Package</h3>
                                <p className="text-gray-600 mb-4">
                                    Ultimate Haldi experience
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Luxury decorations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        4-hour ceremony
                                    </li>
                                </ul>
                                <button className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">
                            Plan Your Haldi Ceremony
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us to create your perfect Haldi ceremony
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Contact Us
                            </button>
                            <button className="flex items-center bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition duration-300">
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default HaldiDecor;