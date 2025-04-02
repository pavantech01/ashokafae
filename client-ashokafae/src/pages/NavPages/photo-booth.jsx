import React from 'react';
import { Heart, Calendar, Gift, Star, Phone, Camera } from 'lucide-react';

function PhotoBooth() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
            {/* Hero Section */}
            {/* <div className="relative h-[600px]">
                <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
                    alt="Photu Booth"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30">
                    <div className="container mx-auto px-4 h-full flex items-center">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-5xl font-bold mb-4">
                                Creative Photo Booths
                            </h1>
                            <p className="text-xl mb-8">
                                Capture magical moments with our stunning photo booth setups
                            </p>
                            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition duration-300">
                                Design Your Booth
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="relative h-[400px] min-w-full">
                <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
                    alt="Photu Booth"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-light text-white mb-4 font-serif italic">
                            Creative Photo Booths
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                            Capture magical moments with our stunning photo booth setups
                        </p>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Photo Booth Designs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
                                alt="Classic Booth"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
                                alt="Modern Booth"
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <Camera className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
                                alt="Themed Booth"
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
                        Booth Features
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <Star className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Custom Themes</h3>
                            <p className="text-gray-600">
                                Personalized booth designs
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Quality Equipment</h3>
                            <p className="text-gray-600">
                                Professional photography setup
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Gift className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Instant Prints</h3>
                            <p className="text-gray-600">
                                High-quality photo prints
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
                            Create Your Photo Booth
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us to design your perfect photo booth experience
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Contact Us
                            </button>
                            <button className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300">
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

export default PhotoBooth;