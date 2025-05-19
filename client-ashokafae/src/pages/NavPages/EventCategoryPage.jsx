import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Heart, Calendar, Phone } from 'lucide-react';
import { Base_URL } from '../../utils/api';
import { useNavigate } from 'react-router-dom';


function EventCategoryPage({ category, heroImage, title, subtitle, buttonText, featureList }) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
        const navigate = useNavigate(); 

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get(`${Base_URL}/api/events/category/${category}`);
                setEvents(res.data);
            } catch (error) {
                console.error(`Failed to fetch ${category} events:`, error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [category]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-pink-50">
            {/* Hero Section */}
            <div className="relative h-[400px] min-w-full">
                <img
                    src={heroImage}
                    alt={`${category} Celebration`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                            {subtitle}
                        </p>
                        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition duration-300 mt-6 cursor-pointer">
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>

            {/* Event List */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        {category} Events
                    </h2>

                    {loading ? (
                        <p className="text-center text-gray-500">Loading events...</p>
                    ) : events.length === 0 ? (
                        <p className="text-center text-gray-500">No events found for {category}.</p>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {events.map((event) => (
                                <div 
                                    key={event._id}
                                    onClick={() => navigate(`/events/${event._id}`)}
                                    className="border rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105">
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
            {featureList?.length > 0 && (
                <div className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                            Why Choose Our {category} Services?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {featureList.map((feature, i) => (
                                <div key={i} className="text-center p-6">
                                    <feature.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">
                            Start Planning Your {category} Event
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us today to begin planning your perfect {category.toLowerCase()} celebration.
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

export default EventCategoryPage;
