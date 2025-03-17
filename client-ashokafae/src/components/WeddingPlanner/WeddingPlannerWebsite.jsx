import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import ContactUs from "../ContactUs/ContactUs";

const teamMembers = [
    {
        name: "Gaurav Damodhore",
        role: "Event Management",
        img: "https://picsum.photos/200/200/?man,portrait",
    },
    {
        name: "Ashish Ramteke",
        role: "Event Management",
        img: "https://picsum.photos/200/201/?male,portrait",
    },
    {
        name: "Anmay Wagh",
        role: "Event Management",
        img: "https://picsum.photos/200/203/?businessman",
    },
    {
        name: "Rucha Agrawar",
        role: "Event Management",
        img: "https://picsum.photos/200/204/?woman,portrait",
    },
];

const smoothScroll = () => {
    const targetPosition = document.querySelector('.landinge-page-02').offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 500; // Adjust this to slow down (1000ms = 1 sec)
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
};

const WeddingPlannerWebsite = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleMembers = 4;

    const nextSlide = () => {
        if (startIndex + visibleMembers < teamMembers.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="min-h-screen">
            <hr className="block md:hidden border-white border-solid border-2 bg-gray-50" />

            {/* Hero Section */}
            <section className="relative min-h-screen">
                <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
                        <MdChevronLeft className="w-12 h-16 text-emerald-500" />
                    </div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
                        <MdChevronRight className="w-12 h-16 text-emerald-500" />
                    </div>

                    <div className="relative h-[100vh] overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434635/samples/imagecon-group.jpg"
                            alt="Wedding venue with arches"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                            <h1 className="font-dancing text-xl md:text-6xl mb-8">
                                We Will Plan Details About <br />
                                Your Wedding
                            </h1>
                            <button className="mt-6 px-6 py-3 bg-emerald-500 rounded-full text-base items-center cursor-pointer">
                                <FaPhoneAlt className="text-blue-500" />&nbsp; <span className="text-white">+91 9876543210</span>
                            </button>

                            <div
                                className="absolute bottom-8 animate-bounce text-xl cursor-pointer"
                                onClick={smoothScroll}
                            >
                                <p>SCROLL DOWN</p>
                                <FontAwesomeIcon icon={faChevronDown} className="p-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="landinge-page-02 w-full bg-gray-100 flex flex-col md:flex-row py-16 md:py-24 pt-28">
                <div className="container mx-auto flex flex-col md:flex-row items-start px-5 md:px-24">

                    {/* Left Side - Image */}
                    <div className="md:w-2/3 w-full flex justify-center mb-5 md:mb-0">
                        <img
                            src="https://picsum.photos/600" // Replace with actual wedding image
                            alt="Wedding Couple"
                            className="w-full md:w-[600px] h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="md:w-1/2 w-full flex flex-col">
                        {/* Headline at the Top (Same Level as Image) */}
                        <h3 className="text-gray-900 font-semibold text-xl md:text-2xl tracking-wide uppercase self-start mb-5">Ashoka</h3>

                        {/* Content Below with Spacing */}
                        <div className="mt-4">
                            <h1 className="text-3xl md:text-6xl font-bold mb-8 font-rochester text-gray-800 tracking-widest">
                                Wedding & Party Planner
                            </h1>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus.
                                Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.
                            </p>
                            <p className="text-gray-500 mt-3 text-base leading-relaxed hidden md:block">
                                Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce
                                dignissim luctus sem eu dapibus. Pellentesque vulputate quam a
                                quam volutpat, sed ullamcorper erat commodo. Vestibulum sit
                                amet ipsum vitae mauris mattis vulputate lacinia nec neque.
                            </p>

                            {/* Contact Button */}
                            <div className="mt-10 md:mt-36">
                                <button className="bg-emerald-500 text-white text-lg font-semibold px-8 py-4 md:px-10 md:py-5 tracking-widest rounded-lg shadow-md hover:bg-emerald-700 transition duration-300 ease-in-out transform hover:scale-105">
                                    CONTACT US
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="lp-03">
                <div className="bg-gray-100 flex flex-col items-center py-6 px-5">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h3 className="text-gray-700 font-semibold uppercase tracking-widest">
                            Our Best
                        </h3>
                        <h1 className="text-5xl font-dancing font-normal text-gray-900">
                            Wedding Gallery
                        </h1>
                        <div className="w-72 h-1 bg-green-600 mx-auto mt-2"></div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-full">
                        {/* First Column */}
                        <div className="flex flex-col gap-4">
                            <img
                                src="https://picsum.photos/250/300?random=1"
                                alt="Wedding Cake"
                                className="rounded-lg shadow-md object-cover w-full h-[300px]"
                            />
                            <img
                                src="https://picsum.photos/250/200?random=2"
                                alt="Ring Exchange"
                                className="rounded-lg shadow-md object-cover w-full h-[300px]"
                            />
                        </div>

                        {/* Second Column */}
                        <div className="col-span-1">
                            <img
                                src="https://picsum.photos/300/500?random=3"
                                alt="Bride and Groom"
                                className="rounded-lg shadow-md object-cover w-full h-[620px]"
                            />
                        </div>

                        {/* Third Column */}
                        <div className="col-span-1">
                            <img
                                src="https://picsum.photos/300/500?random=4"
                                alt="Indian Wedding"
                                className="rounded-lg shadow-md object-cover w-full h-[620px]"
                            />
                        </div>

                        {/* Fourth Column */}
                        <div className="flex flex-col gap-4">
                            <img
                                src="https://picsum.photos/250/300?random=5"
                                alt="Holding Hands"
                                className="rounded-lg shadow-md object-cover w-full h-[300px]"
                            />
                            <img
                                src="https://picsum.photos/250/200?random=6"
                                alt="Couple Love"
                                className="rounded-lg shadow-md object-cover w-full h-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-10 px-5 flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-10">
                    <h3 className="text-gray-700 font-semibold uppercase tracking-widest mb-4">
                        Export Team
                    </h3>
                    <h1 className="text-4xl font-dancing font-bold text-gray-900 mb-4">
                        Our Wedding Planner
                    </h1>
                    <div className="w-48 h-1 bg-green-600 mx-auto mt-2 mb-6"></div>
                </div>

                {/* Team Carousel */}
                <div className="relative w-full max-w-5xl">
                    {/* Left Arrow */}
                    <div
                        onClick={prevSlide}
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 p-2 rounded-full shadow-md ${startIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-200 cursor-pointer"
                            }`}
                        disabled={startIndex === 0}
                    >
                        <span className="text-4xl">&lsaquo;</span> {/* Thinner arrow */}
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14 mx-0 pt-20">
                        {teamMembers.slice(startIndex, startIndex + visibleMembers).map((member, index) => (
                            <div key={index} className="flex flex-col items-center ">
                                <div className="p-0 m-0 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-56 object-cover rounded-md shadow-md"
                                    />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600 font-bold">{member.role}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <div
                        onClick={nextSlide}
                        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-600 p-2 rounded-full shadow-md ${startIndex + visibleMembers >= teamMembers.length ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                            }`}
                        disabled={startIndex + visibleMembers >= teamMembers.length}
                    >
                        <span className="text-4xl">&rsaquo;</span> {/* Thinner arrow */}
                    </div>
                </div>
            </section>

            {/* About us section */}
            <section className="bg-gray-100 flex flex-col md:flex-row justify-around mx-auto">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center p-6 md:p-12">
                    {/* Left Section */}
                    <div className="flex justify-start flex-col">
                        <h3 className="text-gray-600 uppercase font-semibold tracking-widest p-6 ml-6">
                            ASHOKA
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                            Why Choose Us?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We create unique and memorable events tailored to your needs. Our
                            experienced team handles everything from planning to execution,
                            ensuring a seamless and stress-free experience. We provide{" "}
                            <strong>Budget-Friendly Solutions</strong> without compromising on
                            quality. With our <strong>creative ideas</strong>, professional
                            approach, and timely execution, we make every event special.
                            Contact us today to make your event truly spectacular! 🎉
                        </p>

                        {/* Bullet Points */}
                        <ul className="space-y-3 mb-6">
                            {[
                                "Unique & Creative Events – We Make Your Event Special.",
                                "Complete Planning – We Handle Everything For You.",
                                "Custom Plans – Events Designed As Per Your Needs.",
                                "On-Time Execution – Smooth And Hassle-Free Process.",
                                "Happy Clients – Your Satisfaction Is Our Priority!",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <span className="text-green-600 text-xl mr-3">✔</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Contact Button */}
                        <div className="bg-emerald-600 hover:bg-emerald-500 cursor-pointer text-white w-40 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out">
                            CONTACT US
                        </div>
                    </div>

                    {/* Right Section - Image with Play Button */}
                    <div className="relative flex justify-center md:justify-end">
                        <img
                            src="https://picsum.photos/1920/1080"
                            alt="Wedding Event"
                            className="w-full md:w-2/3 h-auto object-cover rounded-lg shadow-2xl"
                        />
                        {/* Play Button */}
                        {/* <button className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-full shadow-md hover:bg-gray-200 transition">
                            <span className="text-green-600 text-4xl cursor-pointer">▶</span>
                        </div>
                    </button> */}
                    </div>
                </div>
            </section>

            <TestimonialsSection />
            <div className="w-full min-h-screen bg-gray-100">
                {/* Hero Section */}
                <div
                    className="relative w-full h-[600px] bg-cover bg-center "
                    style={{ backgroundImage: "url('https://picsum.photos/1950/1080?wedding,india')" }}
                >
                    <div className="absolute inset-0 bg-emerald-300 bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-5xl md:text-5xl font-semibold tracking-wider font-rochester">
                            The Highest Happiness On Earth <br /> Is The Happiness Of Marriage.
                        </h1>
                        <p className="text-white text-xl font-bold mt-20">
                            📞(+91) 9876543210
                        </p>
                        <button className="mt-10 bg-white border-none hover:bg-emerald-400 text-green-500 hover:text-white text-lg font-bold py-2 px-6 rounded-lg shadow-lg transition duration-200">
                            CONTACT US
                        </button>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <img

                        src="https://picsum.photos/1950/1080?Mehendi"
                        alt="Mehendi Hands"
                        className="w-70 h-80 object-cover"
                    />
                    <img
                        src="https://picsum.photos/1950/1080?Wedding,Cake"
                        alt="Wedding Cake"
                        className="w-70 h-80 object-cover"
                    />
                    <img
                        src="https://picsum.photos/1950/1080?Wedding,Ceremony"
                        alt="Wedding Ceremony"
                        className="w-70 h-80 object-cover"
                    />
                    <img
                        src="https://picsum.photos/1950/1080?Wedding,Ring"
                        alt="Wedding ring"
                        className="w-70 h-80 object-cover"
                    />
                </div>
            </div>
                        <ContactUs />
            {/* <FAQSection /> */}
        </div>
    );
};

export default WeddingPlannerWebsite;