import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section className="bg-[#d2f0e4] py-12 px-6 pt-20 ">
            <div className="container mx-auto flex flex-col md:flex-row justify-center gap-12">
                {/* Contact Info Section */}
                <div className="bg-gray-100 p-10 rounded-lg shadow-md w-full md:w-1/3">
                    <h2 className="text-2xl tracking-wider font-bold font-rochester text-green-700 mb-3">Contact Info :</h2>
                    <hr className="border-green-500 mb-2 w-4/5 relative top-4" />
                    <div className="space-y-4 relative top-8">
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-green-700 text-lg" />
                            <span className="text-gray-700 pt-3">Daroga Plot Amravati</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-green-700 text-lg" />
                            <span className="text-gray-700 lowercase pt-3">Ashokafae@Gmail.Com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-green-700 text-lg" />
                            <span className="text-gray-700 pt-3">8208556974 &nbsp; 7666509148</span>
                        </div>
                    </div>
                    <p className="mt-40 text-green-700 font-semibold text-xl cursor-pointer hover:underline">
                        Follow Us
                    </p>
                </div>

                {/* Contact Form Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
                    <h2 className="text-2xl tracking-wider font-bold text-green-700 mb- font-rochester">How We Can Serve You ?</h2>
                    <p>&nbsp;</p>
                    {/* <hr className="border-green-500 mb-4 w-6/7" /> */}
                    <form className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                required
                                placeholder="Name"
                                className="w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 shadow-sm"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                required
                                placeholder="Message"
                                className="peer w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 shadow-sm h-24"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                className="peer w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 shadow-sm"
                            />
                        </div>

                        <button className="w-full bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105 lg:relative top-8">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
