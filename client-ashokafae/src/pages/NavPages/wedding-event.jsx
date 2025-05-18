// import React from 'react';
// import { Heart, Calendar, Package, Star, Phone } from 'lucide-react';

// function WeddingEvent() {
//     return (
//         <div className="min-h-screen bg-gradient-to-b from-primbg-secondaryto-pink-50">
//             {/* Hero Section */}
//             <div className="relative h-[400px] min-w-full">
//                 <img
//                     src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
//                     alt="Wedding Celebration"
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50">
//                     <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
//                         <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
//                             Create Your Dream Wedding
//                         </h1>
//                         <p className="text-xl text-gray-200 max-w-2xl text-center">
//                             Let us transform your special day into an unforgettable celebration of love
//                         </p>
//                         <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition duration-100 cursor-pointer mt-6">
//                             Plan Your Wedding
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Features Section */}
//             <div className="py-20 bg-white">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//                         Why Choose Our Wedding Services?
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div className="text-center p-6">
//                             <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Personalized Planning</h3>
//                             <p className="text-gray-600">
//                                 Custom themes and decor tailoprimbg-secondaryyour love story
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <Package className="w-12 h-12 text-secondary mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Complete Packages</h3>
//                             <p className="text-gray-600">
//                                 Everything you need for your perfect wedding day
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
//                             <p className="text-gray-600">
//                                 Professional planners dedicated to your vision
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* Contact Section */}
//             <div className="py-20 bg-white">
//                 <div className="container mx-auto px-4">
//                     <div className="max-w-2xl mx-auto text-center">
//                         <h2 className="text-3xl font-bold mb-8 text-gray-800">
//                             Start Planning Your Dream Wedding
//                         </h2>
//                         <p className="text-gray-600 mb-8">
//                             Contact us today to begin planning your perfect wedding celebration
//                         </p>
//                         <div className="flex justify-center space-x-4">
//                             <button className="flex items-center bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary transition duration-300">
//                                 <Phone className="w-5 h-5 mr-2" />
//                                 Contact Us
//                             </button>
//                             <button className="flex items-center bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
//                                 <Calendar className="w-5 h-5 mr-2" />
//                                 Schedule Consultation
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WeddingEvent;


// -----------------------------------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Heart, Calendar, Package, Star, Phone } from 'lucide-react';
import { Base_URL } from '../../utils/api';

function WeddingEvent() {
    const [weddingEvents, setWeddingEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeddingEvents = async () => {
            try {
                const res = await axios.get(`${Base_URL}/api/events/category/Wedding`);
                setWeddingEvents(res.data);
            } catch (error) {
                console.error('Failed to fetch wedding events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeddingEvents();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-primbg-secondaryto-pink-50">
            {/* Hero Section */}
            <div className="relative h-[400px] min-w-full">
                <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
                    alt="Wedding Celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
                            Create Your Dream Wedding
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                            Let us transform your special day into an unforgettable celebration of love
                        </p>
                        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition duration-100 cursor-pointer mt-6">
                            Plan Your Wedding
                        </button>
                    </div>
                </div>
            </div>

            {/* Dynamic Wedding Events List */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Wedding Events
                    </h2>

                    {loading ? (
                        <p className="text-center text-gray-500">Loading events...</p>
                    ) : weddingEvents.length === 0 ? (
                        <p className="text-center text-gray-500">No wedding events found.</p>
                    ) : (
                        // <div className="grid md:grid-cols-3 gap-8">
                        //     {weddingEvents.map((event) => (
                        //         <div key={event._id} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
                        //             <img src={event.image?.url} alt={event.title} className="h-48 w-full object-cover rounded-lg mb-4" />
                        //             <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        //             <p className="text-gray-600 mb-2">{event.description}</p>
                        //             <span className="inline-block bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                        //                 {event.category}
                        //             </span>
                        //         </div>
                        //     ))}
                        // </div>



                        <div className="grid md:grid-cols-3 gap-8">
                            {weddingEvents.map((event) => (
                                <div key={event._id} className="border rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105">
                                    <img src={event.image?.url} alt={event.title} className="h-48 w-full object-cover rounded-lg mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                    <div className="flex justify-between items-center px-2 py-3">
                                        <button className="cursor-pointer border-2 border-secondary text-secondary hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg shadow-md">
                                            Book Now
                                        </button>
                                        <Heart className="text-red-500 w-6 h-6 cursor-pointer" />
                                    </div>    
                                </div>
                            ))}
                        </div>
                    )}
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
                                Custom themes and decor tailored to your love story
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
        </div>
    );
}

export default WeddingEvent;
