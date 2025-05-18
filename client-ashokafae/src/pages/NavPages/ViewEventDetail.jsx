import React from 'react';

const ViewEventDetail = ({ event }) => {
    if (!event) {
        return <div className="text-center py-10 text-gray-500">No event selected.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-6">
            <img
                src={event.image?.url}
                alt={event.title}
                className="w-full h-[300px] object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
            <p className="text-gray-700 text-lg mb-4">{event.description}</p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Price: ₹{event.price}
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Location: {event.location}
                </span>
            </div>
            <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition shadow-md">
                Book This Event
            </button>
        </div>
    );
};

export default ViewEventDetail;
