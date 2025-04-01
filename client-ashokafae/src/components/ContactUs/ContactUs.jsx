// import React from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

// const ContactUs = () => {
//     return (
//         <section className="bg-[#d2f0e4] py-12 px-6 pt-20 ">
//             <div className="container mx-auto flex flex-col md:flex-row justify-center gap-12">
//                 {/* Contact Info Section */}
//                 <div className="bg-gray-100 p-10 rounded-lg shadow-md w-full md:w-1/3">
//                     <h2 className="text-2xl tracking-wider font-bold font-rochester text-green-700 mb-3">Contact Info :</h2>
//                     <hr className="border-green-500 mb-2 w-4/5 relative top-4" />
//                     <div className="space-y-4 relative top-8">
//                         <div className="flex items-center gap-3">
//                             <FaMapMarkerAlt className="text-green-700 text-lg" />
//                             <span className="text-gray-700 pt-3">Daroga Plot Amravati</span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <FaEnvelope className="text-green-700 text-lg" />
//                             <span className="text-gray-700 lowercase pt-3">Ashokafae@Gmail.Com</span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <FaPhoneAlt className="text-green-700 text-lg" />
//                             <span className="text-gray-700 pt-3">8208556974 &nbsp; 7666509148</span>
//                         </div>
//                     </div>
//                     <p className="mt-40 text-green-700 font-semibold text-xl cursor-pointer hover:underline">
//                         Follow Us
//                     </p>
//                 </div>

//                 {/* Contact Form Section */}
//                 <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
//                     <h2 className="text-2xl tracking-wider font-bold text-green-700 mb- font-rochester">How We Can Serve You ?</h2>
//                     <p>&nbsp;</p>
//                     {/* <hr className="border-green-500 mb-4 w-6/7" /> */}
//                     <form className="space-y-6">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 required
//                                 placeholder="Name"
//                                 className="w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 shadow-sm"
//                             />
//                         </div>

//                         <div className="relative">
//                             <textarea
//                                 required
//                                 placeholder="Message"
//                                 className="peer w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 shadow-sm h-24"
//                             />
//                         </div>

//                         <div className="relative">
//                             <input
//                                 type="email"
//                                 required
//                                 placeholder="Email Address"
//                                 className="peer w-full bg-white p-3 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 shadow-sm"
//                             />
//                         </div>

//                         <button className="w-full bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105 lg:relative top-8">
//                             SEND MESSAGE
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ContactUs;

import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Base_URL } from '../../utils/api';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch(`${Base_URL}/api/contact/send`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setAlert({ show: true, type: "success", message: data.message });
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                setAlert({ show: true, type: "error", message: data.message });
            }
        } catch (error) {
            console.error("Error:", error);
            setAlert({ show: true, type: "error", message: "Network error. Try again later." });
        } finally {
            setIsLoading(false);
            setTimeout(() => setAlert({ show: false, type: "", message: "" }), 5000);
        }
    };

    return (
        <section className="bg-[#d2f0e4] py-8 px-6 pt-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-center gap-12">
                {/* Contact Info */}
                <div className="bg-gray-100 p-10 rounded-2xl shadow-lg border border-gray-200 w-full md:w-1/3">
                    <h2 className="text-2xl tracking-wider font-bold font-rochester text-green-700 mb-3"> Contact Info</h2>
                    {/* <hr className="border-green-500 mb-4 w-full mx-auto" /> */}
                    <hr className="border-green-500 mb-4 w-4/5 relative top-4" />
                    <div className="space-y-5 text-lg text-gray-700 pt-4">
                        <div className="flex items-center gap-4">
                            <FaMapMarkerAlt className="text-green-700 text-xl" />
                            <span>Daroga Plot, Amravati</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-green-700 text-xl" />
                            <span className="lowercase hover:underline cursor-pointer">ashokafae@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-green-700 text-xl" />
                            <span>8208556974 | 7666509148</span>
                        </div>
                        <div>
                        <p className="mt-56 text-green-700 font-semibold text-xl cursor-pointer hover:underline">
                            Follow Us
                        </p>
                        </div>
                    </div>

                </div>


                {/* Contact Form */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
                    <h2 className="text-2xl tracking-wider font-bold text-green-700 mb- font-rochester mb-5">How We Can Serve You?</h2>
                    {alert.show && (
                        <div className={`p-3 mb-4 rounded ${alert.type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}>
                            {alert.message}
                        </div>
                    )}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {["name", "email", "phone", "subject"].map((field, index) => (
                            <div key={index}>
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    required={field !== "phone" && field !== "subject"}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    className="w-full p-3 rounded-md border focus:outline-none focus:border-green-500 shadow-sm"
                                    value={formData[field]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                        <div>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                placeholder="Your Message"
                                className="w-full p-3 rounded-md border focus:outline-none focus:border-green-500 shadow-sm"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-green-700 transition"
                            disabled={isLoading}
                        >
                            {isLoading ? "SENDING..." : "SEND MESSAGE"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
