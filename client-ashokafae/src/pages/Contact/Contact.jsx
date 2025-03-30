// import React from 'react';
// import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

// import './Contact.css';

// function ContactUs() {
//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Hero Section */}
//             <div className="relative h-[400px]">
//                 <img
//                     src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
//                     alt="Contact Us"
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50">
//                     <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
//                         <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
//                             Contact Us
//                         </h1>
//                         <p className="text-xl text-gray-200 max-w-2xl text-center">
//                             Vestibulum Accumsan Scelerisque Dolor Quam Id Quam Tempus Adipiscing Nick Vulputate Auctor Integer Sapien
//                         </p>
//                         <div className="flex gap-4 mt-6">
//                             <a href="/" className="text-white hover:text-gray-300 transition-colors">
//                                 <Facebook className="w-6 h-6" />
//                             </a>
//                             <a href="/" className="text-white hover:text-gray-300 transition-colors">
//                                 <Instagram className="w-6 h-6" />
//                             </a>
//                             <a href="/" className="text-white hover:text-gray-300 transition-colors">
//                                 <Twitter className="w-6 h-6" />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Contact Information */}
//             <div className="container mx-auto px-32 py-16">  
//                 <div className="grid md:grid-cols-3 gap-8">

//                     <div className="bg-white p-12 h-64  shadow-sm custom-border">
//                         <div className="flex items-center mb-4">
//                             <MapPin className="w-6 h-6 text-secondary mr-2" />
//                         </div>
//                         <div className="flex items-center mb-4">
//                             <h3 className="text-xl font-semibold">Address</h3>
//                         </div>
//                         <div className="flex justify-center mb-4 min-w-fit">
//                             <hr className='w-full border-secondary' />
//                         </div>
//                         <p className="text-gray-600">Daroga Plot Amaravati</p>
//                     </div>

//                     <div className="bg-white p-12 h-64  shadow-sm custom-border">
//                         <div className="flex items-center mb-4">
//                             <Phone className="w-6 h-6 text-secondary mr-2" />
//                         </div>
//                         <div className="flex items-center mb-4">
//                             <h3 className="text-xl font-semibold">Phone Number</h3>
//                         </div>
//                         <div className="flex justify-center mb-4 min-w-fit">
//                             <hr className='w-full border-secondary' />
//                         </div>
//                         <p className="text-gray-600">8058555974, 7666509104</p>
//                     </div>

//                     <div className="bg-white p-12 h-64  shadow-sm custom-border">
//                         <div className="flex items-center mb-4">
//                             <Mail className="w-6 h-6 text-secondary mr-2" />
//                         </div>
//                         <div className="flex items-center mb-4">
//                             <h3 className="text-xl font-semibold">Email</h3>
//                         </div>
//                         <div className="flex justify-center mb-4 min-w-fit">
//                             <hr className='w-full border-secondary' />
//                         </div>
//                         <p className="text-gray-600">AnnMichel@Gmail.Com</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Contact Form */}
//             <div className="container mx-auto px-4 pb-16">
//                 <div className="max-w-3xl mx-auto p-8">
//                     <p className="text-4xl font-semibold text-center mb-8 text-gray-800">
//                         Send Us A Message
//                     </p>
//                     <form className="space-y-6">
//                         <div className="grid md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="name" className="block text-sm ml-1 font-medium text-gray-700 mb-1">
//                                     Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                                     placeholder="Your Name"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="email" className="block text-sm ml-1 font-medium text-gray-700 mb-1">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                                     placeholder="Your Email"
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid md:grid-cols-2 gap-6">
//                             <div>
//                                 <label htmlFor="phone" className="block text-sm ml-1 font-medium text-gray-700 mb-1">
//                                     Contact No.
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     id="phone"
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                                     placeholder="Your Phone Number"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="subject" className="block text-sm ml-1 font-medium text-gray-700 mb-1">
//                                     Subject
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                                     placeholder="Message Subject"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="message" className="block text-sm ml-1 font-medium text-gray-700 mb-1">
//                                 Write A Message
//                             </label>
//                             <textarea
//                                 id="message"
//                                 rows={6}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                                 placeholder="Your Message"
//                             ></textarea>
//                         </div>

//                         <div className="text-center">
//                             <button
//                                 type="submit"
//                                 className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors"
//                             >
//                                 SEND
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default ContactUs;

import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

import './Contact.css';

function ContactUs() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 md:px-8">
                    <h1 className="text-4xl md:text-6xl font-light text-white mb-4 font-serif italic">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl">
                        Vestibulum Accumsan Scelerisque Dolor Quam Id Quam Tempus Adipiscing Nick Vulputate Auctor Integer Sapien
                    </p>
                    <div className="flex gap-4 mt-6">
                        <a href="/" className="text-white hover:text-gray-300">
                            <Facebook className="w-5 md:w-6 h-5 md:h-6" />
                        </a>
                        <a href="/" className="text-white hover:text-gray-300">
                            <Instagram className="w-5 md:w-6 h-5 md:h-6" />
                        </a>
                        <a href="/" className="text-white hover:text-gray-300">
                            <Twitter className="w-5 md:w-6 h-5 md:h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="container mx-auto px-4 md:px-16 lg:px-32 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { icon: <MapPin className="w-6 h-6 text-secondary" />, title: "Address", text: "Daroga Plot Amaravati" },
                        { icon: <Phone className="w-6 h-6 text-secondary" />, title: "Phone Number", text: "8058555974, 7666509104" },
                        { icon: <Mail className="w-6 h-6 text-secondary" />, title: "Email", text: "AnnMichel@Gmail.Com" },
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 md:p-12 shadow-sm custom-border">
                            <div className="flex items-center justify-center mb-4">{item.icon}</div>
                            <h3 className="text-lg md:text-xl font-semibold text-center">{item.title}</h3>
                            <div className="flex justify-center my-2">
                                <hr className="w-1/2 border-secondary" />
                            </div>
                            <p className="text-gray-600 text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="container mx-auto px-4 md:px-8 pb-12 md:pb-16">
                <div className="max-w-3xl mx-auto p-6 md:p-8 bg-white shadow-md rounded-lg">
                    <p className="text-3xl md:text-4xl font-semibold text-center mb-6 text-gray-800">
                        Send Us A Message
                    </p>
                    <form className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
                                { id: "email", label: "Email", type: "email", placeholder: "Your Email" },
                                { id: "phone", label: "Contact No.", type: "tel", placeholder: "Your Phone Number" },
                                { id: "subject", label: "Subject", type: "text", placeholder: "Message Subject" },
                            ].map((input, index) => (
                                <div key={index}>
                                    <label htmlFor={input.id} className="block text-sm font-medium text-gray-700 mb-1">
                                        {input.label}
                                    </label>
                                    <input
                                        type={input.type}
                                        id={input.id}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Write A Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
