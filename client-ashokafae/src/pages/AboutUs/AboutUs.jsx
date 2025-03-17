import React from 'react';

const AboutUs = () => (
    <div className="bg-white text-gray-800">
        {/* Header Section */}
        <div className="relative mt-20 text-center py-56 bg-[url('https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434635/samples/landscapes/landscape-panorama.jpg')] bg-cover bg-center text-white">
            <h1 className="text-5xl font-bold drop-shadow-md">About Us</h1>
            <p className="italic text-lg mt-2 drop-shadow-md">
                Your Vision, Our Expertise – Making Every Event Magical!
            </p>
        </div>

    {/* Start Planning Section */}
    <div className="py-12 px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:pr-10">
                        <h2 className="text-3xl font-bold text-green-600 mb-4 flex justify-center">Start Planning Your Wedding</h2>
                        <p className="text-xl text-center font-funnel leading-relaxed">
                            Welcome to Ashoka, your trusted partner in creating extraordinary events that leave
                            a lasting impression! Whether it's a corporate gathering, wedding, birthday, or
                            themed celebration, we bring creativity, precision, and passion to every event we manage.
                        </p>
                    </div>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1551632811-561732d1e306"
                            alt="Beach wedding arch"
                            className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
                        />
                    </div>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="py-12 px-6 md:px-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e"
                            alt="Wedding ribbon decoration"
                            className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
                        />
                    </div>

                    <div className="md:pl-10">
                        <h2 className="text-3xl font-bold text-green-600 mb-4 flex justify-center">Our Mission</h2>
                        <p className="text-xl text-center leading-relaxed font-funnel">
                            At Ashoka, our mission is to transform your ideas into breathtaking experiences. We
                            strive to deliver innovative event solutions that reflect your vision while ensuring
                            a seamless and stress-free planning process.
                        </p>
                    </div>
                </div>
            </div>

        {/* Who We Are & Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-6 md:px-20 :">
            <div className="bg-teal-50 p-10 rounded-lg flex justify-center items-center flex-col">
                <h2 className="text-3xl font-bold">Who We Are</h2>
                <p className="mt-4 text-xl text-center">
                    With extensive experience in the event management industry, our team consists of professional planners, designers, and coordinators dedicated to curating exceptional events. We collaborate with a wide network of vendors, venues, and entertainers to bring your dream event to life.
                </p>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg flex justify-center items-center flex-col aspect-[7/3]">
                <h2 className="text-3xl font-bold">Why Choose Us?</h2>
                <ul className="mt-4 text-left text-xl space-y-2 list-none">
                    <li>✅ Personalized & Budget-Friendly Packages</li>
                    <li>✅ Strong Vendor Network For Hassle-Free Execution</li>
                    <li>✅ Commitment To Excellence & Client Satisfaction</li>
                </ul>
            </div>
        </div>

        {/* Magical Ending Section */}
        <div className="text-center py-8 px-6 md:px-20 ">
            <h2 className="text-2xl font-bold text-gray-800">Let's Create Something Magical!</h2>
            <p className="mt-2">
                From intimate gatherings to grand celebrations, Ashoka is here to make your event truly unforgettable. Let's discuss how we can turn your vision into reality.
            </p>
        </div>
    </div>
);

export default AboutUs;