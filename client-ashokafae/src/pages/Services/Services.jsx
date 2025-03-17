// import React from 'react';
// import { Camera, Flower2, MapPin, Music, Utensils, Palette } from 'lucide-react';
// import { Link } from 'react-router-dom';

// function Services() {
//     return (
//         <div className="bg-gradient-to-b from-green-50 to-white relative top-16">
//             <div className=" mx-auto px-24 py-20">
//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h1>
//                     <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                         We offer a comprehensive range of wedding planning services to make your special day perfect.
//                     </p>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {/* Service 1 */}
//                     <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                         <div className="flex flex-col items-center text-center">
//                             <div className="mb-4 p-3 bg-green-100 rounded-full">
//                                 <Camera size={32} className="text-green-500" />
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-navy-900">Photography & Video</h3>
//                             <p className="text-gray-600 mb-4">
//                                 Capture every precious moment of your special day with our professional photography and videography services.
//                             </p>
//                             <Link to="/gallery" className='text-white no-underline'>
//                                 <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
//                                     Learn More
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Service 2 */}
//                     <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                         <div className="flex flex-col items-center text-center">
//                             <div className="mb-4 p-3 bg-green-100 rounded-full">
//                                 <Flower2 size={32} className="text-green-500" />
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-navy-900">Floral Arrangements</h3>
//                             <p className="text-gray-600 mb-4">
//                                 Beautiful and elegant floral designs to match your wedding theme and style perfectly.
//                             </p>
//                             <Link to="/gallery" className='text-white no-underline'>
//                                 <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
//                                     Learn More
//                                 </button>
//                             </Link>

//                         </div>
//                     </div>

//                     {/* Service 3 */}
//                     <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                         <div className="flex flex-col items-center text-center">
//                             <div className="mb-4 p-3 bg-green-100 rounded-full">
//                                 <MapPin size={32} className="text-green-500" />
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-navy-900">Venue Selection</h3>
//                             <p className="text-gray-600 mb-4">
//                                 Find the perfect location for your dream wedding with our venue scouting services.
//                             </p>
//                             <Link to="/gallery" className='text-white no-underline'>
//                                 <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
//                                     Learn More
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Service 4 */}
//                     <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                         <div className="flex flex-col items-center text-center">
//                             <div className="mb-4 p-3 bg-green-100 rounded-full">
//                                 <Music size={32} className="text-green-500" />
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-navy-900">Entertainment</h3>
//                             <p className="text-gray-600 mb-4">
//                                 Professional DJs and live music options to keep your guests entertained throughout the event.
//                             </p>
//                             <Link to="/gallery" className='text-white no-underline'>
//                                 <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
//                                     Learn More
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Service 5 */}
//                     <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                         <div className="flex flex-col items-center text-center">
//                             <div className="mb-4 p-3 bg-green-100 rounded-full">
//                                 <Utensils size={32} className="text-green-500" />
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-navy-900">Catering</h3>
//                             <p className="text-gray-600 mb-4">
//                                 Exquisite menu options and professional catering services for your wedding reception.
//                             </p>
//                             <Link to="/gallery" className='text-white no-underline'>
//                                 <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
//                                     Learn More
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Service 6 */}
//                     <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
//                         <div className="flex flex-col items-center text-center">
//                             <div className="mb-4 p-3 bg-green-100 rounded-full">
//                                 <Palette size={32} className="text-green-500" />
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-navy-900">Decor & Styling</h3>
//                             <p className="text-gray-600 mb-4">
//                                 Transform your venue with our stunning decorations and styling services.
//                             </p>
//                             <Link to="/gallery" className='text-white no-underline'>
//                                 <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
//                                     Learn More
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Additional Information */}
//                 <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
//                     <h2 className="text-2xl font-bold text-navy-900 mb-4">Customized Packages Available</h2>
//                     <p className="text-gray-600 mb-6">
//                         We understand that every wedding is unique. Contact us to create a custom package that perfectly suits your needs and budget.
//                     </p>
//                     <button className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition-all duration-300">
//                         <Link to="/contact" className='text-white no-underline'>Contact Us</Link>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Services;

import React from 'react';
import { FaCamera, FaSeedling, FaMapPin, FaMusic, FaUtensils, FaPalette } from 'react-icons/fa'; // Importing icons from react-icons
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="bg-gradient-to-b from-green-50 to-white relative top-16">
            <div className="mx-auto px-24 py-20">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-navy-900 mb-4">Our Services</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We offer a comprehensive range of wedding planning services to make your special day perfect.
                    </p>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-green-100 rounded-full">
                                <FaCamera size={32} className="text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Photography & Video</h3>
                            <p className="text-gray-600 mb-4">
                                Capture every precious moment of your special day with our professional photography and videography services.
                            </p>
                            <Link to="/gallery" className='text-white no-underline'>
                                <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-green-100 rounded-full">
                                <FaSeedling size={32} className="text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Floral Arrangements</h3>
                            <p className="text-gray-600 mb-4">
                                Beautiful and elegant floral designs to match your wedding theme and style perfectly.
                            </p>
                            <Link to="/gallery" className='text-white no-underline'>
                                <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-green-100 rounded-full">
                                <FaMapPin size={32} className="text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Venue Selection</h3>
                            <p className="text-gray-600 mb-4">
                                Find the perfect location for your dream wedding with our venue scouting services.
                            </p>
                            <Link to="/gallery" className='text-white no-underline'>
                                <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-green-100 rounded-full">
                                <FaMusic size={32} className="text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Entertainment</h3>
                            <p className="text-gray-600 mb-4">
                                Professional DJs and live music options to keep your guests entertained throughout the event.
                            </p>
                            <Link to="/gallery" className='text-white no-underline'>
                                <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-green-100 rounded-full">
                                <FaUtensils size={32} className="text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Catering</h3>
                            <p className="text-gray-600 mb-4">
                                Exquisite menu options and professional catering services for your wedding reception.
                            </p>
                            <Link to="/gallery" className='text-white no-underline'>
                                <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4 p-3 bg-green-100 rounded-full">
                                <FaPalette size={32} className="text-green-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-navy-900">Decor & Styling</h3>
                            <p className="text-gray-600 mb-4">
                                Transform your venue with our stunning decorations and styling services.
                            </p>
                            <Link to="/gallery" className='text-white no-underline'>
                                <button className="mt-2 px-6 py-2 border-2 border-green-400 text-white bg-green-600 rounded-full hover:bg-gray-200 hover:text-green-500 transition-all duration-300 cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-navy-900 mb-4">Customized Packages Available</h2>
                    <p className="text-gray-600 mb-6">
                        We understand that every wedding is unique. Contact us to create a custom package that perfectly suits your needs and budget.
                    </p>
                    <button className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition-all duration-300">
                        <Link to="/contact" className='text-white no-underline'>Contact Us</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Services;