import React from 'react';
import { Heart, Calendar, Gift, Package, Star, Phone } from 'lucide-react';

function WeddingEvent() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primbg-secondaryto-pink-50">
            {/* Hero Section */}
            <div className="relative h-[600px]">
                <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
                    alt="Wedding Celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primbg-secondary/30 to-pink-500/30">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl font-bold mb-4">
                                Create Your Dream Wedding
                            </h1>
                            <p className="text-xl mb-8">
                                Let us transform your special day into an unforgettable celebration of love
                            </p>
                            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-secondarytransition duration-300">
                                Plan Your Wedding
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Why Choose Our Wedding Services?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Personalized Planning</h3>
                            <p className="text-gray-600">
                                Custom themes and decor tailoprimbg-secondaryyour love story
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Package className="w-12 h-12 text-secondary mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Complete Packages</h3>
                            <p className="text-gray-600">
                                Everything you need for your perfect wedding day
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                            <p className="text-gray-600">
                                Professional planners dedicated to your vision
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Wedding Packages
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
                                alt="Classic Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Classic Wedding</h3>
                                <p className="text-gray-600 mb-4">
                                    Elegant and timeless celebration
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Classic decorations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Full-day event
                                    </li>
                                </ul>
                                <button className="w-full bg-secondary text-white py-2 rounded-md hover:bg-secondary transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105">
                            <div className="bg-secondary text-white text-center py-2">
                                Most Popular
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
                                alt="Luxury Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Luxury Wedding</h3>
                                <p className="text-gray-600 mb-4">
                                    The complete luxury experience
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Premium decorations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Multi-day events
                                    </li>
                                </ul>
                                <button className="w-full bg-secondary text-white py-2 rounded-md hover:bg-secondary transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
                                alt="Royal Package"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Royal Wedding</h3>
                                <p className="text-gray-600 mb-4">
                                    Extraordinary celebration
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <Gift className="w-4 h-4 mr-2" />
                                        Exclusive design & decor
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Week-long celebrations
                                    </li>
                                </ul>
                                <button className="w-full bg-secondary text-white py-2 rounded-md hover:bg-secondary transition duration-300">
                                    Select Package
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">
                            Start Planning Your Dream Wedding
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us today to begin planning your perfect wedding celebration
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary transition duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Contact Us
                            </button>
                            <button className="flex items-center bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
                                <Calendar className="w-5 h-5 mr-2" />
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-50 py-8">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>© 2024 Wedding Events. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default WeddingEvent;