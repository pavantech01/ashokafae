// import React from 'react';

// const Contact = () => {
//     return (
//         <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 relative top-16 min-h-screen">

//             {/* Main Title */}
//             <h1 className="text-4xl font-bold text-center text-indigo-900 mb-12">Contact US</h1>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//                 {/* Contact Form Section */}
//                 <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//                     <form className="space-y-4">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input
//                                 type="text"
//                                 placeholder="Name"
//                                 className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             />
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input
//                                 type="tel"
//                                 placeholder="Number"
//                                 className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             />
//                             <input
//                                 type="date"
//                                 placeholder="Dd/Mm/Yyyy"
//                                 className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             />
//                         </div>
//                         <input
//                             type="text"
//                             placeholder="Your Address"
//                             className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                         />
//                         <select
//                             className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             defaultValue=""
//                         >
//                             <option value="" disabled>Basic Plan</option>
//                             <option value="basic">Basic</option>
//                             <option value="premium">Premium</option>
//                             <option value="enterprise">Enterprise</option>
//                         </select>
//                         <textarea
//                             placeholder="Your Message"
//                             rows={6}
//                             className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                         />
//                         <button
//                             type="submit"
//                             className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors float-right"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>

//                 {/* Help & Support Section */}
//                 <div className="space-y-8">
//                     <section className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-2xl font-bold mb-4 text-indigo-900">Help & Support</h2>
//                         <p className="text-gray-600">
//                             For any assistance, reach out to us via the methods below:
//                         </p>
//                     </section>

//                     <section className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-2xl font-bold mb-4 text-indigo-900">Email</h2>
//                         <p className="text-gray-600">
//                             Email us at{' '}
//                             <a href="mailto:support@eventmanagement.com" className="text-black no-underline hover:text-blue-700">
//                                 support@eventmanagement.com
//                             </a>
//                         </p>
//                     </section>

//                     <section className="bg-white p-6 rounded-lg shadow-md">
//                         <h2 className="text-2xl font-bold mb-4 text-indigo-900">Social Media</h2>
//                         <ul className="flex flex-wrap gap-4 list-none"> {/* Remove default list styling */}
//                             <li>
//                                 <a
//                                     href="#facebook"
//                                     className="text-black no-underline font-normal"
//                                 >
//                                     <i className="fab fa-facebook fa-lg mr-2"></i> Facebook
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#twitter"
//                                     className="text-black no-underline font-normal"
//                                 >
//                                     <i className="fab fa-twitter fa-lg mr-2"></i> Twitter
//                                 </a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="#instagram"
//                                     className="text-black no-underline font-normal"
//                                 >
//                                     <i className="fab fa-instagram fa-lg mr-2"></i> Instagram
//                                 </a>
//                             </li>
//                         </ul>
//                     </section>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;

// import React from "react";
// import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaPhone } from "react-icons/fa";

// const Contact = () => {
//     return (
//         <div className="max-w-7xl mx-auto px-4 py-10 md:p-6 lg:p-8 min-h-screen">
//             {/* Main Title */}
//             <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-900 mb-8">
//                 Contact Us
//             </h1>

//             {/* Grid Layout */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {/* Contact Form Section */}
//                 <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//                     <form className="space-y-4">
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <input
//                                 type="text"
//                                 placeholder="Name"
//                                 className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             />
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <input
//                                 type="tel"
//                                 placeholder="Number"
//                                 className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             />
//                             <input
//                                 type="date"
//                                 placeholder="Dd/Mm/Yyyy"
//                                 className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             />
//                         </div>
//                         <input
//                             type="text"
//                             placeholder="Your Address"
//                             className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                         />
//                         <select
//                             className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                             defaultValue=""
//                         >
//                             <option value="" disabled>
//                                 Select a Plan
//                             </option>
//                             <option value="basic">Basic</option>
//                             <option value="premium">Premium</option>
//                             <option value="enterprise">Enterprise</option>
//                         </select>
//                         <textarea
//                             placeholder="Your Message"
//                             rows={5}
//                             className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500"
//                         />
//                         <button
//                             type="submit"
//                             className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>

//                 {/* Help & Support Section */}
//                 <div className="space-y-6 flex flex-col items-center py-16">
//                     <section className="bg-white p-4 sm:p-5 rounded-lg shadow-md w-72">
//                         <div className="flex items-center space-x-3">
//                             <FaPhone className="text-indigo-600 text-2xl" />
//                             <h2 className="text-lg sm:text-xl font-bold text-indigo-900">
//                                 Help & Support
//                             </h2>
//                         </div>
//                         <p className="text-gray-600 text-sm sm:text-base mt-2">
//                             For any assistance, call us or reach out via email.
//                         </p>
//                     </section>

//                     <section className="bg-white p-4 sm:p-5 rounded-lg shadow-md w-72">
//                         <div className="flex items-center space-x-3">
//                             <FaEnvelope className="text-indigo-600 text-2xl" />
//                             <h2 className="text-lg sm:text-xl font-bold text-indigo-900">Email</h2>
//                         </div>
//                         <p className="text-gray-600 text-sm sm:text-base mt-2">
//                             Email us at{" "}
//                             <a
//                                 href="mailto:support@eventmanagement.com"
//                                 className="text-gray-600 hover:underline"
//                             >
//                                 ashokafae@gmail.com

//                             </a>
//                         </p>
//                     </section>

//                     <section className="bg-white p-4 sm:p-5 rounded-lg shadow-md w-72">
//                         <div className="flex items-center space-x-3">
//                             <h2 className="text-lg sm:text-xl font-bold text-indigo-900">
//                                 Social Media
//                             </h2>
//                         </div>
//                         <ul className="flex justify-center space-x-6 mt-2">
//                             <li className="list-none">
//                                 <a href="#facebook" className="text-blue-600 text-2xl hover:scale-110 transition ">
//                                     <FaFacebook />
//                                 </a>
//                             </li>
//                             <li className="list-none">
//                                 <a href="#twitter" className="text-blue-600 text-2xl hover:scale-110 transition">
//                                     <FaTwitter />
//                                 </a>
//                             </li>
//                             <li className="list-none">
//                                 <a href="#instagram" className="text-pink-500 text-2xl hover:scale-110 transition">
//                                     <FaInstagram />
//                                 </a>
//                             </li>
//                         </ul>
//                     </section>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;

import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
    // Tailwind CSS styles as constants
    const inputStyle = "border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-500 w-full";
    const infoCard = "bg-white shadow-lg rounded-md p-5 w-64 flex items-start gap-4";
    const icon = "text-gray-600 text-xl mt-1";
    const socialIcon = "text-lg cursor-pointer hover:scale-110 transition-transform";

    return (
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 px-6 md:px-16 lg:px-24 py-12">

            {/* Left: Contact Form */}
            <div className="bg-white shadow-lg rounded-md p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Contact Us</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className={inputStyle} />
                    <input type="email" placeholder="Email" className={inputStyle} />
                    <input type="text" placeholder="Phone Number" className={inputStyle} />
                    <input type="date" className={inputStyle} />
                    <input type="text" placeholder="Address" className={`${inputStyle} md:col-span-2`} />
                    <select
                        className={`${inputStyle} md:col-span-2`}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select a Plan
                        </option>
                        <option value="birthday">Birthday</option>
                        <option value="wedding">Wedding & Party</option>
                        <option value="baby">Baby shower</option>
                    </select>
                    <textarea placeholder="Your Message" className={`${inputStyle} md:col-span-2 h-28`}></textarea>
                    <button className="md:col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-md transition">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col gap-5">
                <div className={infoCard}>
                    <FaPhoneAlt className={icon} />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Help & Support</h3>
                        <p className="text-gray-700 text-sm">For any assistance, call us or reach out via email.</p>
                    </div>
                </div>

                <div className={infoCard}>
                    <FaEnvelope className={icon} />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-700 text-sm">
                            Email us at <a href="mailto:raibagipavan14@eventmanagement.com" className="text-gray-900 no-underline hover:underline">ashokafae@gmail.com</a>
                        </p>
                    </div>
                </div>

                <div className={`${infoCard} justify-center`}>
                    <FaFacebookF className={`${socialIcon} text-blue-600`} />
                    <FaTwitter className={`${socialIcon} text-blue-400`} />
                    <FaInstagram className={`${socialIcon} text-pink-600`} />
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
