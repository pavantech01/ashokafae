import React, { useState, useEffect } from "react";

const teamMembers = [
    {
        name: "Gaurav Damodhore",
        role: "Senior Event Manager",
        img: "https://picsum.photos/200/200/?man,portrait",
    },
    {
        name: "Ashish Ramteke",
        role: "Venue Coordinator",
        img: "https://picsum.photos/200/201/?male,portrait",
    },
    {
        name: "Anmay Wagh",
        role: "Decor Specialist",
        img: "https://picsum.photos/200/203/?businessman",
    },
    {
        name: "Rucha Agrawar",
        role: "Client Relations",
        img: "https://picsum.photos/200/200/?woman,portrait",
    },
    {
        name: "Sneha Kapoor",
        role: "Catering Manager",
        img: "https://picsum.photos/200/200/?female,portrait",
    },
];
const Home = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const visibleMembers = 4;

    const heroImages = [
        "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434635/samples/imagecon-group.jpg",
        "https://picsum.photos/1920/1080/?wedding",
        "https://picsum.photos/1920/1080/?bride",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 2000);
        return () => clearInterval(interval);
    },
        //eslint-disable-next-line
        []);

    const smoothScroll = (targetClass) => {
        const target = document.querySelector(targetClass);
        target?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-screen">
            <div className="relative h-full overflow-hidden">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={img}
                            alt={`Wedding scene ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                ))}
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl md:text-7xl font-serif mb-6 text-center leading-tight">
                        Creating Timeless
                        <br />
                        Wedding Memories
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center text-gray-200">
                        Let us transform your special day into an unforgettable celebration
                    </p>
                    <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 transition-colors px-8 py-4 rounded-full text-lg">
                        <span>📞</span>
                        <span>(406) 555-0120</span>
                    </button>

                    <div
                        onClick={() => smoothScroll('.about-section')}
                        className="absolute bottom-12 animate-bounce bg-transparent bg-none flex flex-col items-center cursor-pointer"
                    >
                        <span className="text-sm uppercase tracking-wider mb-2">Discover More</span>
                        <span className="text-2xl">↓    </span>
                    </div>
                    
                </div>
            </div>
        </section>

        {/* About Section */}
        <section className="about-section py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
                    <div className="md:w-1/2">
                        <img
                            src="https://picsum.photos/800/600"
                            alt="Elegant wedding setup"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 p-12">
                        <h3 className="text-emerald-600 font-semibold tracking-wider uppercase mb-4">
                            Welcome to Ashoka
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">
                            Luxury Wedding Planning
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            With over a decade of experience in crafting extraordinary weddings,
                            we bring your vision to life with meticulous attention to detail
                            and unparalleled creativity. Our team of expert planners ensures
                            every moment of your special day is perfect.
                        </p>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg transition-colors">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-emerald-600 uppercase tracking-wider font-semibold mb-4">
                        Our Portfolio
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-serif">Magical Moments</h2>
                    <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-xl group"
                        >
                            <img
                                src={`https://picsum.photos/400/500?random=${i}`}
                                alt={`Wedding gallery ${i}`}
                                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-emerald-600 uppercase tracking-wider font-semibold mb-4">
                        Meet Our Team
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-serif">Expert Planners</h2>
                    <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6"></div>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
                        className={`absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 ${
                            startIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                        }`}
                        disabled={startIndex === 0}
                    >
                        ←
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                        {teamMembers.slice(startIndex, startIndex + visibleMembers).map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
                            >
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-emerald-600">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setStartIndex(Math.min(startIndex + 1, teamMembers.length - visibleMembers))}
                        className={`absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 ${
                            startIndex + visibleMembers >= teamMembers.length ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                        }`}
                        disabled={startIndex + visibleMembers >= teamMembers.length}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Home;
