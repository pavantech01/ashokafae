// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import { Base_URL } from '../../utils/api';

// const ContactUs = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//     });

//     const [isLoading, setIsLoading] = useState(false);
//     const [alert, setAlert] = useState({ show: false, type: "", message: "" });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);

//         try {
//             const response = await fetch(`${Base_URL}/api/contact/send`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setAlert({ show: true, type: "success", message: data.message });
//                 setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//             } else {
//                 setAlert({ show: true, type: "error", message: data.message });
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             setAlert({ show: true, type: "error", message: "Network error. Try again later." });
//         } finally {
//             setIsLoading(false);
//             setTimeout(() => setAlert({ show: false, type: "", message: "" }), 5000);
//         }
//     };

//     return (
//         <section className="bg-[#d2f0e4] py-8 px-6 pt-20">
//             <div className="container mx-auto flex flex-col md:flex-row justify-center gap-10">
//                 {/* Contact Info */}
//                 <div className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200 w-full md:w-1/4">
//                     <h2 className="text-xl tracking-wider font-bold font-rochester text-green-700 mb-3"> Contact Info</h2>
//                     <hr className="border-green-500 mb-4 w-4/5 relative top-4" />
//                     <div className="space-y-4 text-lg text-gray-700 pt-4">
//                         <div className="flex items-center gap-3">
//                             <FaMapMarkerAlt className="text-green-700 text-lg" />
//                             <span className="text-base">Daroga Plot, Amravati</span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <FaEnvelope className="text-green-700 text-lg" />
//                             <span className="lowercase text-base hover:underline cursor-pointer">ashokafae@gmail.com</span>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <FaPhoneAlt className="text-green-700 text-lg" />
//                             <span className="text-base">8208556974 | 7666509148</span>
//                         </div>
//                             <p className="pt-40 text-green-700 font-semibold text-lg cursor-pointer">
//                                 Follow Us
//                             </p>
//                     </div>
//                 </div>

//                 {/* Contact Form */}
//                 <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/4">
//                     <h2 className="text-xl tracking-wider font-bold text-green-700 mb-5 font-rochester">How We Can Serve You?</h2>
//                     {alert.show && (
//                         <div className={`p-3 mb-4 rounded ${alert.type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}>
//                             {alert.message}
//                         </div>
//                     )}
//                     <form className="space-y-4" onSubmit={handleSubmit}>
//                         {["name", "email", "phone", "subject"].map((field, index) => (
//                             <div key={index}>
//                                 <input
//                                     type={field === "email" ? "email" : "text"}
//                                     name={field}
//                                     required={field !== "phone" && field !== "subject"}
//                                     placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                                     className="w-full p-2 rounded-md border focus:outline-none focus:border-green-500 shadow-sm"
//                                     value={formData[field]}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         ))}
//                         <div>
//                             <textarea
//                                 name="message"
//                                 rows="4"
//                                 required
//                                 placeholder="Your Message"
//                                 className="w-full p-2 rounded-md border focus:outline-none focus:border-green-500 shadow-sm"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                             ></textarea>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 transition"
//                             disabled={isLoading}
//                         >
//                             {isLoading ? "SENDING..." : "SEND MESSAGE"}
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
        <section className="bg-[#d2f0e4] py-8 px-4 sm:px-6 pt-16 sm:pt-20">
            <div className="container mx-auto flex flex-col items-center sm:flex-row sm:items-stretch justify-center gap-6 sm:gap-10 max-w-5xl">
                {/* Contact Info */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full sm:w-1/2 md:w-2/5 lg:w-1/3 mb-6 sm:mb-0">
                    <h2 className="text-xl tracking-wider font-bold font-rochester text-green-700 mb-3">Contact Info</h2>
                    <hr className="border-green-500 mb-4 w-4/5" />
                    <div className="space-y-4 text-gray-700 pt-4">
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-green-700 text-lg flex-shrink-0" />
                            <span className="text-base">Daroga Plot, Amravati</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-green-700 text-lg flex-shrink-0" />
                            <span className="lowercase text-base hover:underline cursor-pointer">ashokafae@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-green-700 text-lg flex-shrink-0" />
                            <span className="text-base">8208556974 | 7666509148</span>
                        </div>
                        <div className="pt-6 sm:pt-12 lg:pt-40">
                            <p className="text-green-700 font-semibold text-lg cursor-pointer">
                                Follow Us
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 w-full sm:w-1/2 md:w-2/5 lg:w-1/3">
                    <h2 className="text-xl tracking-wider font-bold text-green-700 mb-5 font-rochester">How We Can Serve You?</h2>
                    {alert.show && (
                        <div className={`p-3 mb-4 rounded ${alert.type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}>
                            {alert.message}
                        </div>
                    )}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {["name", "email", "phone", "subject"].map((field, index) => (
                            <div key={index}>
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    required={field !== "phone" && field !== "subject"}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    className="w-full p-2 rounded-md border focus:outline-none focus:border-green-500 shadow-sm"
                                    value={formData[field]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                        <div>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                placeholder="Your Message"
                                className="w-full p-2 rounded-md border focus:outline-none focus:border-green-500 shadow-sm"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 transition"
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