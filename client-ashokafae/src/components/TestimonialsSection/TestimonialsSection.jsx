import React, { useState } from 'react';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            name: "Sarah Johnson",
            rating: 5,
            text: "Absolutely amazing service! The team went above and beyond to make our event special. Highly recommend!",
            image: "https://picsum.photos/600",
            profilePic: "https://picsum.photos/701",
            type: "warm"
        },
        {
            name: "Michael Brown",
            rating: 5,
            text: "Professional and attentive staff. Every detail was perfect. Our wedding was a dream come true!",
            image: "https://picsum.photos/602",
            profilePic: "https://picsum.photos/702",
            type: "mint"
        },
        {
            name: "Emily Davis",
            rating: 4,
            text: "From planning to execution, everything was flawless. We couldn't have asked for a better experience.",
            image: "https://picsum.photos/604",
            profilePic: "https://picsum.photos/705",
            type: "contrast"
        },
        {
            name: "David Wilson",
            rating: 5,
            text: "Exceptional service and attention to detail. Our corporate event was a huge success thanks to them!",
            image: "https://picsum.photos/606",
            profilePic: "https://picsum.photos/707",
            type: "warm"
        },
        {
            name: "Jessica Taylor",
            rating: 4,
            text: "The team was incredibly organized and creative. Our anniversary celebration was unforgettable!",
            image: "https://picsum.photos/608",
            profilePic: "https://picsum.photos/709",
            type: "mint"
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className='bg-gray-100 min-h-screen'>
            <div className="max-w-7xl mx-auto px-8 py-20">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from our happy clients about their experiences with our event planning services
                    </p>
                </div>

                <div className="relative">
                    <div className="flex justify-center items-center gap-6">
                        {/* Adjust the number of visible testimonials based on screen size */}
                        {testimonials.slice(currentSlide, currentSlide + (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 3 : 3)).map((testimonial, index) => (
                            <div
                                key={index}
                                className={`w-full sm:w-80 transition-all duration-500 ${index === 0 ? 'opacity-100 scale-100' : 'opacity-100 scale-90'}`}
                            >
                                <div className={`rounded-xl shadow-lg p-8 h-[520px] flex flex-col ${testimonial.type === 'mint'
                                    ? 'bg-teal-50'
                                    : testimonial.type === 'contrast'
                                        ? 'bg-white'
                                        : 'bg-orange-50'
                                    }`}>

                                    <img
                                        src={testimonial.image}
                                        alt={`Testimonial by ${testimonial.name}`}
                                        className="w-full h-64 object-cover rounded-lg mb-6"
                                    />
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.profilePic}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-800">{testimonial.name}</div>
                                            <div className="flex text-yellow-400">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                        <path d="M 9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-teal-600 hover:text-teal-800 cursor-pointer"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>

                    <div
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-teal-600 hover:text-teal-800 cursor-pointer"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-teal-500 w-8' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;