// ViewEventDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ViewEventDetail from './ViewEventDetail';
import { Base_URL } from '../../utils/api';

export default function ViewEventDetailPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get(`${Base_URL}/api/events/${id}`);
                setEvent(res.data);
            } catch (err) {
                console.error("Error fetching event:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    if (loading) return <div className="text-center py-10 text-gray-500">Loading...</div>;

    return <ViewEventDetail event={event} />;
}
