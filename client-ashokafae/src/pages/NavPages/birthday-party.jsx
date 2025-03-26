import React from 'react';
import { Calendar, Gift, Package, Star, Phone, Camera, Cake } from 'lucide-react';

function BirthdayParty() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-pink-50">
            {/* Hero Section */}
            <div className="relative h-[600px]">
                <img
                    src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80"
                    alt="Birthday Celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-pink-500/30">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl font-bold mb-4">
                                Create Magical Birthday Memories
                            </h1>
                            <p className="text-xl mb-8">
                                Turn your special day into an unforgettable celebration
                            </p>
                            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition duration-300">
                                Plan Your Party
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Birthday Celebration Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80"
                                alt="Kids Birthday"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80"
                                alt="Teen Party"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80"
                                alt="Adult Celebration"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80"
                                alt="Theme Party"
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
                        Why Choose Our Birthday Services?
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <Cake className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Custom Themes</h3>
                            <p className="text-gray-600">
                                Personalized party themes for all ages
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Package className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Full Service</h3>
                            <p className="text-gray-600">
                                Complete party planning and setup
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Star className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
                            <p className="text-gray-600">
                                Professional entertainment options
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Gift className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Party Favors</h3>
                            <p className="text-gray-600">
                                Custom party favors and gifts
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Birthday Packages
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80"
                                alt="Basic Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Basic Fun</h3>
                                <p className="text-gray-600 mb-4">
                                    Perfect for small gatherings
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Basic decorations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        3-hour party
                                    </li>
                                </ul>
                                <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105">
                            <div className="bg-indigo-600 text-white text-center py-2">
                                Most Popular
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80"
                                alt="Premium Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Premium Party</h3>
                                <p className="text-gray-600 mb-4">
                                    The complete party experience
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Premium decorations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        5-hour celebration
                                    </li>
                                </ul>
                                <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80"
                                alt="Ultimate Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Ultimate Party</h3>
                                <p className="text-gray-600 mb-4">
                                    The ultimate birthday experience
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Custom theme & decor
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Full-day celebration
                                    </li>
                                </ul>
                                <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
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
                            Ready to Plan Your Birthday?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us today to start planning your perfect birthday celebration
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Contact Us
                            </button>
                            <button className="flex items-center bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
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

export default BirthdayParty;