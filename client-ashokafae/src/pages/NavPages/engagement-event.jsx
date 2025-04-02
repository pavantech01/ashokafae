import React from 'react';
import { Heart, Calendar,  Package, Star, Phone } from 'lucide-react';

function EngagementEvent() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
            {/* Hero Section */}
            {/* <div className="relative h-[600px]">
                <img
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80"
                    alt="Engagement Celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl font-bold mb-4">
                                Begin Your Forever Story
                            </h1>
                            <p className="text-xl mb-8">
                                Make your engagement special with our perfectly curated celebration packages
                            </p>
                            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300">
                                Plan Your Engagement
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="relative h-[400px] min-w-full">
                <img
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80"
                    alt="Engagement Celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
                            Begin Your Forever Story
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                            Make your engagement special with our perfectly curated celebration packages                        </p>
                        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300 mt-6 cursor-pointer">
                            Plan Your Engagement
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Why Choose Our Engagement Services?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <Heart className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Romantic Settings</h3>
                            <p className="text-gray-600">
                                Create the perfect atmosphere for your special moment
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Package className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Complete Packages</h3>
                            <p className="text-gray-600">
                                Everything you need for a memorable engagement
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Expert Planning</h3>
                            <p className="text-gray-600">
                                Professional team to handle every detail
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* Contact Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">
                            Ready to Plan Your Engagement?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us today to start planning your perfect engagement celebration
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300">
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

export default EngagementEvent;