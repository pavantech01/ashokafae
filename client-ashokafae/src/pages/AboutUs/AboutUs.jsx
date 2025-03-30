// import React from 'react';

// const AboutUs = () => (
//     <div className="bg-white text-gray-800">
//         {/* Header Section */}
//         <div className="relative h-[400px]">
//             <img
//                 src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434634/samples/landscapes/beach-boat.jpg"
//                 alt="About Us"
//                 className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50">
//                 <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
//                     <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
//                         About Us
//                     </h1>
//                     <p className="text-xl text-gray-200 max-w-2xl text-center">
//                     Your Vision, Our Expertise – Making Every Event Magical!
//                     </p>
//                 </div>
//             </div>
//         </div>

//         {/* Start Planning Section */}
//         <div className="py-12 px-56 md:px-20">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                 <div className="md:pr-10">
//                     <h2 className="text-2xl font-bold text-green-600 mb-4 flex justify-center">Start Planning Your Wedding</h2>
//                     <p className="text-xl text-justify font-funnel  leading-relaxed">
//                         Welcome to Ashoka, your trusted partner in creating extraordinary events that leave
//                         a lasting impression! Whether it's a corporate gathering, wedding, birthday, or
//                         themed celebration, we bring creativity, precision, and passion to every event we manage.
//                     </p>
//                 </div>

//                 <div>
//                     <img
//                         src="https://cdn.pixabay.com/photo/2021/08/24/11/32/couple-6570391_1280.jpg"
//                         alt="Beach wedding arch"
//                         className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
//                     />
//                 </div>
//             </div>
//         </div>

//         {/* Our Mission Section */}
//         <div className="py-12 px-10 md:px-20 ">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                 <div>
//                     <img
//                         src="https://cdn.pixabay.com/photo/2020/08/20/20/38/hands-5504603_1280.jpg"
//                         alt="Wedding ribbon decoration"
//                         className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
//                     />
//                 </div>

//                 <div className="md:pl-10">
//                     <h2 className="text-2xl font-bold text-green-600 mb-4 flex justify-center">Our Mission</h2>
//                     <p className="text-xl text-start leading-relaxed font-funnel">
//                         At Ashoka, our mission is to transform your ideas into breathtaking experiences. We strive to deliver innovative event solutions that reflect your vision while ensuring
//                         a seamless and stress-free planning process.
//                     </p>
//                 </div>
//             </div>
//         </div>

//         {/* Who We Are & Why Choose Us Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 px-10 md:px-20">
//             <div className="bg-teal-50 p-10 rounded-lg flex justify-center items-center flex-col h-full">
//                 <h2 className="text-2xl font-bold">Who We Are</h2>
//                 <p className="mt-4 text-lg text-center">
//                     With extensive experience in the event management industry, our team consists of professional planners, designers, and coordinators dedicated to curating exceptional events. We collaborate with a wide network of vendors, venues, and entertainers to bring your dream event to life.
//                 </p>
//             </div>

//             <div className="bg-teal-50 p-10 rounded-lg flex items-center flex-col h-full">
//                 <h2 className="text-2xl font-bold ">Why Choose Us?</h2>
//                 <ul className="mt-4 text-left text-lg space-y-2 list-none">
//                     <li>✅ Personalized & Budget-Friendly Packages</li>
//                     <li>✅ Strong Vendor Network For Hassle-Free Execution</li>
//                     <li>✅ Commitment To Excellence & Client Satisfaction</li>
//                 </ul>
//             </div>
//         </div>


//         {/* Magical Ending Section */}
//         <div className="text-center py-8 px-6 md:px-20 mb-10">
//             <h2 className="text-xl font-bold text-gray-800">Let's Create Something Magical!</h2>
//             <p className="mt-2">
//                 From intimate gatherings to grand celebrations, Ashoka is here to make your event truly unforgettable. Let's discuss how we can turn your vision into reality.
//             </p>
//         </div>
//     </div>
// );

// export default AboutUs;

import React from 'react';

const AboutUs = () => (
    <div className="bg-white text-gray-800">
        {/* Header Section */}
        <div className="relative h-[400px]">
            <img
                src="https://res.cloudinary.com/dauyjkqmu/image/upload/v1737434634/samples/landscapes/beach-boat.jpg"
                alt="About Us"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50">
                <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
                        About Us
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl text-center">
                    Your Vision, Our Expertise – Making Every Event Magical!
                    </p>
                </div>
            </div>
        </div>

        {/* Start Planning Section */}
        <div className="py-12 px-10 md:px-40"> {/* Adjusted padding here */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-10">
                    <h2 className="text-2xl font-bold text-green-600 mb-4 flex justify-center">Start Planning Your Wedding</h2>
                    <p className="text-xl text-justify font-funnel leading-relaxed">
                        Welcome to Ashoka, your trusted partner in creating extraordinary events that leave
                        a lasting impression! Whether it's a corporate gathering, wedding, birthday, or
                        themed celebration, we bring creativity, precision, and passion to every event we manage.
                    </p>
                </div>

                <div>
                    <img
                        src="https://cdn.pixabay.com/photo/2021/08/24/11/32/couple-6570391_1280.jpg"
                        alt="Beach wedding arch"
                        className="rounded-lg shadow-lg object-cover h-[300px] aspect-[4/3]" 
                    />
                </div>
            </div>
        </div>

        {/* Our Mission Section */}
        <div className="py-12 px-10 md:px-40"> {/* Adjusted padding here */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <img
                        src="https://cdn.pixabay.com/photo/2020/08/20/20/38/hands-5504603_1280.jpg"
                        alt="Wedding ribbon decoration"
                        className="rounded-lg shadow-lg object-cover h-[300px] aspect-[4/3]"
                    />
                </div>

                <div className="md:pl-10">
                    <h2 className="text-2xl font-bold text-green-600 mb-4 flex justify-center">Our Mission</h2>
                    <p className="text-xl text-justify leading-relaxed font-funnel">
                        At Ashoka, our mission is to transform your ideas into breathtaking experiences. We strive to deliver innovative event solutions that reflect your vision while ensuring
                        a seamless and stress-free planning process.
                    </p>
                </div>
            </div>
        </div>

        {/* Who We Are & Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 px-10 md:px-20">
            <div className="bg-teal-50 p-10 rounded-lg flex justify-center items-center flex-col h-full">
                <h2 className="text-2xl font-bold">Who We Are</h2>
                <p className="mt-4 text-lg text-center">
                    With extensive experience in the event management industry, our team consists of professional planners, designers, and coordinators dedicated to curating exceptional events. We collaborate with a wide network of vendors, venues, and entertainers to bring your dream event to life.
                </p>
            </div>

            <div className="bg-teal-50 p-10 rounded-lg flex items-center flex-col h-full">
                <h2 className="text-2xl font-bold ">Why Choose Us?</h2>
                <ul className="mt-4 text-left text-lg space-y-2 list-none">
                    <li>✅ Personalized & Budget-Friendly Packages</li>
                    <li>✅ Strong Vendor Network For Hassle-Free Execution</li>
                    <li>✅ Commitment To Excellence & Client Satisfaction</li>
                </ul>
            </div>
        </div>

        {/* Magical Ending Section */}
        <div className="text-center py-8 px-6 md:px-20 mb-10">
            <h2 className="text-xl font-bold text-gray-800">Let's Create Something Magical!</h2>
            <p className="mt-2">
                From intimate gatherings to grand celebrations, Ashoka is here to make your event truly unforgettable. Let's discuss how we can turn your vision into reality.
            </p>
        </div>
    </div>
);

export default AboutUs;