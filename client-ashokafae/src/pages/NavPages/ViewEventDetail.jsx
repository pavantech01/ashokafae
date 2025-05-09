import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Base_URL } from '../../utils/api';


function ViewEventDetail() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get(`${Base_URL}/api/events/${id}`);
                setEvent(res.data);
            } catch (error) {
                console.error('Failed to fetch event:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    if (loading) return <p className="text-center mt-10 text-gray-600">Loading...</p>;
    if (!event) return <p className="text-center mt-10 text-red-600">Event not found</p>;

    return (
        <div className="min-h-screen py-16 px-6 bg-white max-w-4xl mx-auto">
            <img src={event.image?.url} alt={event.title} className="w-full h-96 object-cover rounded-xl mb-6" />
            <h1 className="text-4xl font-bold mb-4 text-gray-800">{event.title}</h1>
            <p className="text-lg text-gray-600 mb-4">{event.description}</p>
            <p className="text-md text-gray-500 mb-2"><strong>Category:</strong> {event.category}</p>
            <p className="text-md text-gray-500 mb-2"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <button className="mt-6 bg-secondary text-white px-6 py-2 rounded-lg hover:bg-secondary-dark transition">
                Book This Event
            </button>
        </div>
    );
}

export default ViewEventDetail;
