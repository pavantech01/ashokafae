import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';
import { fetchEventDetails } from '../../utils/api';

function EventView() {
    const { id } = useParams(); // Get the event ID from the URL
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getEventDetails = async () => {
            try {
                const data = await fetchEventDetails(id);
                setEvent(data);
            } catch (error) {
                console.error("Error fetching event details:", error);
            } finally {
                setLoading(false);
            }
        };

        getEventDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!event) {
        return <div>No event found.</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
            <div className="relative h-[400px] min-w-full mb-6">
                <img
                    src={event.image} // Assuming event has an image field
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
                            {event.title}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                            {event.description}
                        </p>
                        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition duration-300 mt-6 cursor-pointer">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">
                        Event Details
                    </h2>
                    <p className="text-gray-600 mb-8">{event.details}</p>
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
    );
}

export default EventView;
