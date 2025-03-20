import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';

function EventCard({ title, description, features, image }) {
    return (
        <div className="bg-[#e6ffff] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <img src={image} alt={title} className="w-full h-64 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
                <p className="text-gray-600 text-center italic mb-6">{description}</p>

                <div className="mb-6">
                    <h4 className="text-center font-semibold mb-4">What We Offer?</h4>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="text-center text-gray-600 list-none">{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-500 mb-4">Early Bird Offer** - Extra 5% Off For Bookings 30 Days In Advance</p>
                    <button className="bg-emerald-400 text-white px-8 py-2 rounded-full hover:bg-emerald-500 transition-colors">
                        More
                    </button>
                </div>
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
                "Child Friendly Stage, Hall Decoration",
                "Themed Party (Unicorn, Pirates, Spiderman, Etc.)",
                "Cake",
                "Venue Selection",
                "AV System & Lighting",
                "Photographer & Videographer"
            ]
        },
        {
            title: "Baby Shiver",
            description: "A Baby Shower Is Not Just A Celebration, It's A Warm Embrace Of Love, Joy, And Blessings For The Little One On The Way",
            image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            features: [
                "Complete Baby Shiver Decoration",
                "Balloons, Banners, Flower Arrangements, And Themed Party",
                "Child Friendly Stage, Hall Decoration",
                "Cake (Baby Shower Cake, Cupcakes, And Desserts)",
                "AV System & Lighting",
                "Photographer & Videographer",
                "Music & Entertainment, Soft Background Music"
            ]
        },
        {
            title: "Wedding Planning",
            description: "Your Perfect Day Deserves Perfect Planning",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            features: [
                "Complete Wedding Decoration",
                "Venue Selection & Setup",
                "Floral Arrangements",
                "Catering Services",
                "Wedding Cake Design",
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
                "Catering Services",
                "Registration & Badge Management",
                "Stage & Lighting Design",
                "Corporate Branding Integration",
                "Event Documentation"
            ]
        }
    ];

    return (
        <>
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Events</h1>
                    <p className="text-lg text-gray-600">Creating Unforgettable Moments, One Event at a Time</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>
            </div>
            
        </div>
        <ContactUs/>
        </>
    );
}

export default Events;