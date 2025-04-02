import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../../components/ContactUs/ContactUs';

function EventCard({ title, description, features, image }) {
    return (
        <div className="bg-blue-100 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 mx-auto sm:mx-0 w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
                src={image}
                alt={title}
                className="w-full h-44 sm:h-48 object-cover rounded-t-xl"
            />

            <div className="p-4 sm:p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm text-left mb-2">{description}</p>

                <div className="mb-2">
                    <h4 className="font-semibold text-base text-gray-800 mb-1">What We Offer?</h4>
                    <ul className="space-y-1 text-gray-600 text-sm text-left">
                        {features.map((feature, index) => (
                            <li key={index} className="list-none pl-2">{feature}</li>
                        ))}
                    </ul>
                </div>

                <p className="text-xs text-gray-500 mb-2">
                    🌟 Early Bird Offer: Extra 5% Off For Bookings 30 Days In Advance!
                </p>

                <Link to="/contact">
                    <button className="bg-emerald-500 text-white px-4 py-2 text-sm rounded-full shadow-md hover:bg-emerald-600 transition-all">
                        More
                    </button>
                </Link>
            </div>
        </div>
    );
}

function Events() {
    const events = [
        {
            title: "Birthday Party",
            description: "Beginning—Cherish The Moments, Embrace The Joy!",
            image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            features: [
                "Complete Birthday Decoration",
                "Themed Party (Unicorn, Pirates, etc.)",
                "Cake & Venue Selection",
                "AV System & Lighting",
                "Photographer & Videographer"
            ]
        },
        {
            title: "Baby Shower",
            description: "A Baby Shower Is Not Just A Celebration, It's A Warm Embrace Of Love, Joy, And Blessings For The Little One On The Way",
            image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            features: [
                "Complete Decoration & Setup",
                "Balloons, Flowers & Themed Party",
                "Cake & Desserts",
                "Music & Entertainment",
                "Photography & Videography"
            ]
        },
        {
            title: "Wedding Planning",
            description: "Your Perfect Day Deserves Perfect Planning",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            features: [
                "Complete Wedding Decoration",
                "Venue Selection & Setup",
                "Floral Arrangements & Catering",
                "Photography & Videography",
                "Music & Entertainment"
            ]
        },
        {
            title: "Corporate Events",
            description: "Professional Excellence in Every Detail",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            features: [
                "Conference Room Setup",
                "Audio/Visual Equipment",
                "Catering & Branding",
                "Stage & Lighting Design",
                "Event Documentation"
            ]
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Events</h1>
                        <p className="text-lg text-gray-600">Creating Unforgettable Moments, One Event at a Time</p>
                    </div>

                    {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 place-items-center"> */}
                    <div className="grid grid-cols-2 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {events.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </div>
                </div>
            </div>
            <ContactUs />
        </>
    );
}

export default Events;
