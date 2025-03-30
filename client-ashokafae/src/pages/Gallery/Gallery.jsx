import React from 'react';

function Gallery() {
    const galleryImages = [
        {
            category: "Weddings",
            images: [
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542788/Birthday_50_exz1nu.jpg", alt: "Wedding Ceremony" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542789/Chidren_birthday_qz9dwn.jpg", alt: "Floral Arrangements" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542787/Birthday_35th_ugprgs.jpg", alt: "Reception Decor" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542790/Sideview_decor_cmqvli.jpg", alt: "Wedding Details" }

            ]
        },
        {
            category: "Decorations",
            images: [
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737623167/WhatsApp_Image_2025-01-22_at_1.25.09_PM_2_zkytq6.jpg", alt: "Table Settings" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737623166/WhatsApp_Image_2025-01-22_at_1.25.08_PM_v4av6w.jpg", alt: "Venue Decoration" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542788/Birthday_50_exz1nu.jpg", alt: "Lighting Design" },
                { url: "https://res.cloudinary.com/dauyjkqmu/image/upload/v1737542789/Chidren_birthday_qz9dwn.jpg", alt: "Floral Design" }
            ]
        }
    ];

    const testimonials = [
        {
            name: "Rahul & Priya",
            review: "Our wedding day in Yavatmal was absolutely perfect thanks to the amazing team!",
            rating: 5
        },
        {
            name: "Sneha & Rohan",
            review: "They took care of every detail and made our dream wedding in Nagpur come true.",
            rating: 5
        },
        {
            name: "Aisha & Karan",
            review: "Professional, creative, and absolutely wonderful to work with in Amaravati!",
            rating: 5
        }
    ];

    return (
        <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
            <div className="relative h-[400px] min-w-full mb-10">
                <img
                    src="https://images.unsplash.com/photo-1626021524168-a800ae7ae356?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                    <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-light text-white mb-4 font-serif italic">
                            Our Gallery
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl text-center">
                            Beautiful moments from our wonderful events
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}


                {/* <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-navy-900 mb-4">Our Gallery</h1>
                    <p className="text-gray-600 text-lg">Beautiful moments from our wonderful events</p>
                </div> */}

                {/* Gallery Grid */}
                {galleryImages.map((section, index) => (
                    <div key={index} className="mb-16">
                        <h2 className="text-2xl font-bold text-navy-900 mb-8">{section.category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {section.images.map((image, imgIndex) => (
                                <div key={imgIndex} className="group relative overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Testimonials */}
                <div className="mt-16 mb-16">
                    <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Client Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                                <div className="text-pink-500 mb-4">
                                    {"★".repeat(testimonial.rating)}
                                </div>
                                <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                                <p className="font-semibold text-navy-900">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Gallery;
