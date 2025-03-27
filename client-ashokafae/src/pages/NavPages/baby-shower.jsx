// import React from 'react';
// import { FaHeart, FaCalendarAlt, FaGift, FaBox, FaStar, FaPhone, FaCalendar } from 'react-icons/fa';


// const images = [
//     "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901282/Boy_or_girl_baby_shower_gmmuub.jpg",
//     "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901448/Baby_Shower_Balloons_Decoration_-_3_qtppct.jpg",
//     "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901333/76b5f8f4-bafe-47b8-8118-2fc02177f668_w6vpqa.jpg",
//     "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901327/all_types_decoration__con_egqwrw.jpg",
//     "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901289/Baby_boy_birthday_balloon_decoration_m3jjrz.jpg",
//     "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901281/a8d23333-f36d-4590-85db-f31fb8e53eb3_tpsyjn.jpg",
//     "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901288/Baby_It_s_Cold_Outside_Baby_Shower_Balloon_Backdrop_heje6s.jpg",
//     "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901286/abe6e1a9-2851-4838-8232-3a15b8c241ea_chq0kk.jpg",
// ];


// function BabyShower() {
//     return (
//         <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
//             {/* Hero Section */}
//             <div className="relative h-[600px]">
//                 <img
//                     src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80"
//                     alt="Baby Shower Celebration"
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-pink-500/30">
//                     <div className="container mx-auto px-4 h-full flex items-center">
//                         <div className="max-w-2xl text-white">
//                             <h1 className="text-5xl font-bold mb-4">
//                                 Create Magical Moments for Your Little One
//                             </h1>
//                             <p className="text-xl mb-8">
//                                 Let us help you celebrate this special occasion with our beautifully curated baby shower packages
//                             </p>
//                             <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">
//                                 Book Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Baby Shower Gallery */}
//             <div className='relative top-[100px] pb-10'>
//                 <div className="container mx-auto px-4 pb-10">
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                         {images.map((img, index) => (
//                             <div key={index} className="relative group">
//                                 <img src={img} alt={`Baby Shower ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
//                                 <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-blue-600 font-semibold py-1 px-4 rounded-full opacity-90 group-hover:opacity-100 transition">
//                                     Book Now
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Features Section */}
//             <div className="py-20 bg-white">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//                         Why Choose Our Baby Shower Services?
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div className="text-center p-6">
//                             <FaHeart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Personalized Touch</h3>
//                             <p className="text-gray-600">
//                                 Custom themes and decorations tailored to your vision
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <FaBox className="w-12 h-12 text-blue-500 mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">All-Inclusive Packages</h3>
//                             <p className="text-gray-600">
//                                 Everything you need for the perfect celebration
//                             </p>
//                         </div>
//                         <div className="text-center p-6">
//                             <FaStar className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
//                             <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
//                             <p className="text-gray-600">
//                                 Experienced team dedicated to your special day
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>



//             {/* Packages Section */}
//             <div className="py-20 bg-gray-50">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//                         Our Popular Packages
//                     </h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                             <img
//                                 src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80"
//                                 alt="Basic Package"
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-6">
//                                 <h3 className="text-xl font-semibold mb-2">Basic Bundle</h3>
//                                 <p className="text-gray-600 mb-4">
//                                     Perfect for intimate gatherings
//                                 </p>
//                                 <ul className="space-y-2 mb-6">
//                                     <li className="flex items-center text-gray-600">
//                                         <FaGift className="w-4 h-4 mr-2" />
//                                         Basic decorations
//                                     </li>
//                                     <li className="flex items-center text-gray-600">
//                                         <FaCalendarAlt className="w-4 h-4 mr-2" />
//                                         2-hour event
//                                     </li>
//                                 </ul>
//                                 <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
//                                     Select Package
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105">
//                             <div className="bg-blue-600 text-white text-center py-2">
//                                 Most Popular
//                             </div>
//                             <img
//                                 src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?auto=format&fit=crop&q=80"
//                                 alt="Premium Package"
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-6">
//                                 <h3 className="text-xl font-semibold mb-2">Premium Package</h3>
//                                 <p className="text-gray-600 mb-4">
//                                     The complete celebration experience
//                                 </p>
//                                 <ul className="space-y-2 mb-6">
//                                     <li className="flex items-center text-gray-600">
//                                         <FaGift className="w-4 h-4 mr-2" />
//                                         Luxury decorations
//                                     </li>
//                                     <li className="flex items-center text-gray-600">
//                                         <FaCalendarAlt className="w-4 h-4 mr-2" />
//                                         4-hour event
//                                     </li>
//                                 </ul>
//                                 <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
//                                     Select Package
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                             <img
//                                 src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80"
//                                 alt="Deluxe Package"
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-6">
//                                 <h3 className="text-xl font-semibold mb-2">Deluxe Package</h3>
//                                 <p className="text-gray-600 mb-4">
//                                     The ultimate luxury experience
//                                 </p>
//                                 <ul className="space-y-2 mb-6">
//                                     <li className="flex items-center text-gray-600">
//                                         <FaGift className="w-4 h-4 mr-2" />
//                                         Custom theme & decor
//                                     </li>
//                                     <li className="flex items-center text-gray-600">
//                                         <FaCalendarAlt className="w-4 h-4 mr-2" />
//                                         Full-day event
//                                     </li>
//                                 </ul>
//                                 <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
//                                     Select Package
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Contact Section */}
//             <div className="py-20 bg-white">
//                 <div className="container mx-auto px-4">
//                     <div className="max-w-2xl mx-auto text-center">
//                         <h2 className="text-3xl font-bold mb-8 text-gray-800">
//                             Ready to Start Planning?
//                         </h2>
//                         <p className="text-gray-600 mb-8">
//                             Contact us today to begin planning your perfect baby shower celebration
//                         </p>
//                         <div className="flex justify-center space-x-4">
//                             <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
//                                 <FaPhone className="w-5 h-5 mr-2" />
//                                 Contact Us
//                             </button>
//                             <button className="flex items-center bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
//                                 <FaCalendar className="w-5 h-5 mr-2" />
//                                 Book Consultation
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default BabyShower;


// ==================================================



import React from "react";
import { Heart, Package, Star, Phone, Calendar } from "lucide-react";

const images = [
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901282/Boy_or_girl_baby_shower_gmmuub.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901448/Baby_Shower_Balloons_Decoration_-_3_qtppct.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901333/76b5f8f4-bafe-47b8-8118-2fc02177f668_w6vpqa.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901327/all_types_decoration__con_egqwrw.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901289/Baby_boy_birthday_balloon_decoration_m3jjrz.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901281/a8d23333-f36d-4590-85db-f31fb8e53eb3_tpsyjn.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901288/Baby_It_s_Cold_Outside_Baby_Shower_Balloon_Backdrop_heje6s.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742901286/abe6e1a9-2851-4838-8232-3a15b8c241ea_chq0kk.jpg",
];

function BabyShower() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50">
            {/* Hero Section */}
            <div className="relative h-[600px]">
                <img
                    src="https://images.unsplash.com/photo-1616843777726-2b35ac7c4215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Baby Shower Celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-pink-500/30">
                    <div className="container mx-auto px-4 h-full flex items-center justify-center">
                        <div className="max-w-2xl text-white text-center">
                            <h1 className="text-5xl font-bold mb-4">
                                Create Magical Moments for Your Little One
                            </h1>
                            <p className="text-xl mb-8">
                                Let us help you celebrate this special occasion with our beautifully curated baby shower packages
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Baby Shower Gallery */}
            <div className="bg-white min-h-screen py-10">
                <h2 className="text-4xl font-bold text-center text-[#007F5F] mb-8">
                    Baby Shower Celebration
                </h2>
                <div className="grid md:grid-cols-4 gap-6 px-5">
                    {images.map((image, index) => (
                        <div key={index} className="bg-green-200 p-4 rounded-lg shadow-lg">
                            <img
                                src={image}
                                alt="Baby Shower"
                                className="w-full h-64 object-cover rounded-md"
                            />
                            <div className="flex justify-between items-center mt-4 px-4">
                                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md">
                                    Book Now
                                </button>
                                <Heart className="text-red-500 w-6 h-6 cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                        Why Choose Our Baby Shower Services?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Personalized Touch</h3>
                            <p className="text-gray-600">
                                Custom themes and decorations tailored to your vision
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Package className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">All-Inclusive Packages</h3>
                            <p className="text-gray-600">
                                Everything you need for the perfect celebration
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Professional Service</h3>
                            <p className="text-gray-600">
                                Experienced team dedicated to your special day
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800">
                            Ready to Start Planning?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Contact us today to begin planning your perfect baby shower celebration
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center bg-[#ff8484] text-gray-800 px-6 py-3 rounded-full hover:bg-[#ff9292] transition duration-300">
                                <Phone className="w-5 h-5 mr-2 text-black" />
                                Contact Us
                            </button>
                            <button className="flex items-center bg-[#98f5e1] text-gray-800 px-6 py-3 rounded-full hover:bg-[#7de0cc] transition duration-300">
                                <Calendar className="w-5 h-5 mr-2" />
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BabyShower;
