import React from 'react';
import { Calendar, Gift, Package, Star, Phone, Camera, Sparkles } from 'lucide-react';

function MehndiCeremony() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
            {/* Hero Section */}
            <div className="relative h-[600px]">
                <img
                    src="https://ic.pics.livejournal.com/pushpitha/50334853/1022046/1022046_original.jpg"
                    alt="Mehndi Ceremony"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl font-bold mb-4">
                                Elegant Mehndi Celebrations
                            </h1>
                            <p className="text-xl mb-8">
                                Create beautiful memories with our exquisite Mehndi ceremony arrangements
                            </p>
                            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition duration-300">
                                Plan Your Mehndi
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Our Mehndi Celebrations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://ic.pics.livejournal.com/pushpitha/50334853/1022046/1022046_original.jpg"
                                alt="Traditional Mehndi"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://ic.pics.livejournal.com/pushpitha/50334853/1022046/1022046_original.jpg"
                                alt="Modern Mehndi Setup"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://ic.pics.livejournal.com/pushpitha/50334853/1022046/1022046_original.jpg"
                                alt="Contemporary Mehndi"
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
                        Our Mehndi Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <Sparkles className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Expert Artists</h3>
                            <p className="text-gray-600">
                                Professional Mehndi artists for intricate designs
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Package className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Complete Setup</h3>
                            <p className="text-gray-600">
                                Full ceremony arrangements and decor
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Star className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Custom Themes</h3>
                            <p className="text-gray-600">
                                Personalized decoration themes
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Mehndi Packages
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1617307326200-453c92b1c6c2?auto=format&fit=crop&q=80"
                                alt="Basic Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Classic Package</h3>
                                <p className="text-gray-600 mb-4">
                                    Traditional Mehndi ceremony
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Basic decorations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        3-hour ceremony
                                    </li>
                                </ul>
                                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105">
                            <div className="bg-green-600 text-white text-center py-2">
                                Most Popular
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1617307326208-453c92b1c6c3?auto=format&fit=crop&q=80"
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
                                        5-hour ceremony
                                    </li>
                                </ul>
                                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1617307326216-453c92b1c6c4?auto=format&fit=crop&q=80"
                                alt="Luxury Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Luxury Package</h3>
                                <p className="text-gray-600 mb-4">
                                    Ultimate Mehndi experience
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Luxury decorations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Full-day ceremony
                                    </li>
                                </ul>
                                <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
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
                            Plan Your Mehndi Ceremony
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us to create your perfect Mehndi celebration
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Contact Us
                            </button>
                            <button className="flex items-center bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition duration-300">
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

export default MehndiCeremony;