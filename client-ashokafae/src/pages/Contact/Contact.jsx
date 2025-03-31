import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Base_URL } from '../../utils/api';

import './Contact.css';



function ContactUs() {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '' 
    });
    
    // Loading and alert states
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            // Send form data to backend - update with your actual API URL
            // const apiUrl = Base_URL || 'http://localhost:5000';
            // const apiUrl =  'http://localhost:5000';

            const response = await fetch(`${Base_URL}/api/contact/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Success message
                setAlert({
                    show: true,
                    type: 'success',
                    message: data.message || 'Your message has been sent successfully!'
                });
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                // Error message
                setAlert({
                    show: true,
                    type: 'error',
                    message: data.message || 'Failed to send message. Please try again.'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setAlert({
                show: true,
                type: 'error',
                message: 'Network error. Please check your connection and try again.'
            });
        } finally {
            setIsLoading(false);
            
            // Hide alert after 5 seconds
            setTimeout(() => {
                setAlert({ show: false, type: '', message: '' });
            }, 5000);
        }
    };

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
                        { icon: <Mail className="w-6 h-6 text-secondary" />, title: "Email", text: "raibagipavan14@Gmail.Com" },
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
                    
                    {/* Alert Message */}
                    {alert.show && (
                        <div className={`p-4 mb-6 rounded-md ${alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {alert.message}
                        </div>
                    )}
                    
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { id: "name", label: "Name", type: "text", placeholder: "Your Name", required: true },
                                { id: "email", label: "Email", type: "email", placeholder: "Your Email", required: true },
                                { id: "phone", label: "Contact No.", type: "tel", placeholder: "Your Phone Number", required: false },
                                { id: "subject", label: "Subject", type: "text", placeholder: "Message Subject", required: false },
                            ].map((input, index) => (
                                <div key={index}>
                                    <label htmlFor={input.id} className="block text-sm font-medium text-gray-700 mb-1">
                                        {input.label} {input.required && <span className="text-red-500">*</span>}
                                    </label>
                                    <input
                                        type={input.type}
                                        id={input.id}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder={input.placeholder}
                                        value={formData[input.id]}
                                        onChange={handleChange}
                                        required={input.required}
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Write A Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
                                disabled={isLoading}
                            >
                                {isLoading ? 'SENDING...' : 'SEND'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;