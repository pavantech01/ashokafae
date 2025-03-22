import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import ContactUs from "../ContactUs/ContactUs";
import FAQSection from "../FAQSection/FAQSection";
// import TopButton from "../TopButton/TopButton";

const teamMembers = [
    {
        name: "Gaurav Damodhore",
        role: "Event Management",
        img: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434642/samples/look-up.jpg",
    },
    {
        name: "Ashish Ramteke",
        role: "Event Management",
        img: "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

const smoothScroll = () => {
    const targetPosition = document.querySelector('#second-page').offsetTop;
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
    // eslint-disable-next-line
    const [startIndex, setStartIndex] = useState(0);


    return (
        <div className="min-h-screen">


            <hr className="block md:hidden border-white border-solid border-2 bg-gray-50" />
            {/* <TopButton/> */}
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
                            src="https://images.unsplash.com/photo-1519379169146-d4b170447caa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Wedding venue with arches"
                            className="w-full h-full object-cover opacity-90"
                        />
                        <img
                            src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1742394734/6_v8ixbe.jpg"
                            alt="Wedding venue with arches"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                            <p className="font-dancing text-lg font-semibold tracking-wide md:text-5xl mb-8 ">
                                We Will Plan Details About <br />
                                Your Wedding
                            </p>
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

            {/* Second Landing Page */}
            <section className="w-full bg-gray-100 flex justify-center py-16 md:py-24 pt-28" id="second-page">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-5 md:px-24">

                    {/* Left Side - Image */}
                    <div className="md:w-[350px] w-full flex justify-center mb-5 md:mb-0">
                        <img
                            src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1742394735/9_i6u4ml.jpg"
                            alt="Wedding Couple"
                            className="w-full h-[450px] object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div className="md:w-[500px] w-full flex flex-col md:ml-12 text-left">

                        {/* Headline */}
                        <h3 className="text-gray-900 font-bold text-xl md:text-xl uppercase mb-3 tracking-wider">ASHOKA</h3>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-rochester font-bold text-gray-800 leading-snug">
                            Wedding & Party <br />Planner
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed mt-4">
                            Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus.
                            Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum
                            vitae mauris mattis vulputate lacinia nec neque.
                        </p>

                        <p className="text-gray-500 mt-3 text-base leading-relaxed hidden md:block">
                            Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus.
                            Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.
                        </p>

                        {/* Contact Button */}
                        <div className="mt-6">
                            <button className="bg-green-600 text-white text-lg font-semibold px-8 py-3 rounded-md shadow-md hover:bg-green-700 transition duration-300 ease-in-out">
                                CONTACT US
                            </button>
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
                                src="https://images.unsplash.com/photo-1567530331069-630c6a3926f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
                                alt="Wedding Cake"
                                className="rounded-lg shadow-md object-cover w-full h-[290px]"
                            />
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661862397518-8e50332b6e97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
                                alt="Ring Exchange"
                                className="rounded-lg shadow-md object-cover w-full h-[290px]"
                            />
                        </div>

                        {/* Second Column */}
                        <div className="col-span-1">
                            <img
                                src="https://images.unsplash.com/photo-1635919254233-38ea27301900?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                                alt="Bride and Groom"
                                className="rounded-lg shadow-md object-cover w-full h-[595px]"
                            />
                        </div>

                        {/* Third Column */}
                        <div className="col-span-1">
                            <img
                                src="https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
                                alt="Indian Wedding"
                                className="rounded-lg shadow-md object-cover w-full h-[595px]"
                            />
                        </div>

                        {/* Fourth Column */}
                        <div className="flex flex-col gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1601120979673-b3f6f4c7d2ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGluZGlhbiUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
                                alt="Holding Hands"
                                className="rounded-lg shadow-md object-cover w-full h-[290px]"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1630764883473-e8c2056f0589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fDB8fHww"
                                alt="Couple Love"
                                className="rounded-lg shadow-md object-cover w-full h-[290px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Landing Third screen */}
            <section className="bg-gray-100 py-10 px-5 flex flex-col items-center relative top-10">
                {/* Header */}
                <div className="text-center">
                    <h3 className="text-gray-700 font-semibold uppercase tracking-widest mb-2">
                        Expert Team
                    </h3>
                    <h1 className="text-4xl font-dancing font-bold text-gray-900 mb-2">
                        Our Wedding Planner
                    </h1>
                    <div className="w-48 h-1 bg-green-600 mx-auto "></div>
                </div>

                {/* Team Carousel */}
                <div className="relative w-full max-w-4xl mx-auto px-6 sm:px-10 md:px-20 lg:px-40 text-center">

                    <div className="h-[3px] mt-2 mb-6"></div>

                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-6 sm:gap-10 justify-center">
                        {teamMembers.slice(startIndex, startIndex + 2).map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="object-cover w-40 sm:w-52 h-52 rounded-lg"
                                    />
                                </div>
                                <h3 className="mt-3 text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm sm:text-base text-gray-600 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* About us section */}
            <section className="bg-gray-100 lg:py-7 lg:px-16 md:ml-8 ml-8 mr-8 md:mt-24 mt-24 md:max-h-screen md:px-14 sm:px-14">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* Left Section - Content */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-gray-600 uppercase font-semibold tracking-widest">ASHOKA</h3>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Why Choose Us?</h2>
                        <p className="text-gray-700 leading-relaxed mt-4 text-justify">
                            We create unique and memorable events tailored to your needs. Our
                            experienced team handles everything from planning to execution,
                            ensuring a seamless and stress-free experience. We provide{" "}
                            <strong>Budget-Friendly Solutions</strong> without compromising on
                            quality. With our <strong>creative ideas</strong>, professional
                            approach, and timely execution, we make every event special.
                            Contact us today to make your event truly spectacular! 🎉
                        </p>
                        {/* Bullet Points */}
                        <ul className="space-y-2 mt-6">
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
                        <button className="mt-5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md text-lg font-semibold transition duration-300">
                            CONTACT US
                        </button>
                    </div>
                    {/* Right Section - Image with Play Button */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1742394735/10_q8qvvx.jpg"
                                alt="Wedding Event"
                                className="w-[340px] h-[450px] object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                </div>
            </section>


            <TestimonialsSection />
            <FAQSection />

            <div className="w-full min-h-screen bg-gray-100">
                {/* Hero Section */}
                <div
                    className="relative w-full h-[600px] bg-cover bg-center "
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562967005-a3c85514d3e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                >
                    <div className="absolute inset-0 bg-emerald-400 bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-5xl md:text-5xl font-semibold tracking-wider font-rochester">
                            The Highest Happiness On Earth <br /> Is The Happiness Of Marriage.
                        </h1>
                        {/* <p className="text-white text-xl font-bold mt-20">
                            📞(+91) 9876543210
                        </p>
                        <button className="mt-10 bg-white border-none hover:bg-emerald-400 text-green-500 hover:text-white text-lg font-bold py-2 px-6 rounded-lg shadow-lg transition duration-200">
                            CONTACT US
                        </button> */}
                    </div>
                </div>
                {/* Gallery Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-1  ">
                    <img
                        src="https://images.unsplash.com/photo-1530785404354-f4ed0206a0d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Mehendi Hands"
                        className="w-full h-80 object-cover rounded-md"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1614878257894-bcae7dd58054?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Wedding Cake"
                        className="w-full h-80 object-cover rounded-md"
                    />
                    <img
                        src="https://images.stockcake.com/public/7/c/9/7c92b638-e2fe-4fdf-a724-cdb35486816a/joyful-wedding-ceremony-stockcake.jpg"
                        alt="Wedding Ceremony"
                        className="w-full h-80 object-cover rounded-md"
                    />
                    <img
                        src="https://res.cloudinary.com/dauyjkqmu/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1742394735/4_dtlzrp.jpg"
                        alt="Wedding ring"
                        className="w-full h-80 object-cover rounded-md"
                    />
                </div>
            </div>
            <ContactUs />
        </div>
    );
};

export default WeddingPlannerWebsite;