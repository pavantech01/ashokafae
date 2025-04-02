import React, { useState } from 'react';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
    {
        name: "Rahul Patel",
        rating: 5,
        text: "Maza aa gaya! The team at Amaravati Nagpur did an amazing job with our wedding planning. Highly recommend!",
        image: "https://picsum.photos/600",
        profilePic: "https://picsum.photos/701",
        type: "warm"
    },
    {
        name: "Priya Sharma",
        rating: 5,
        text: "Kya baat hai! The staff at Amaravati Nagpur were so professional and attentive. Our corporate event was a huge success!",
        image: "https://picsum.photos/602",
        profilePic: "https://picsum.photos/702",
        type: "mint"
    },
    {
        name: "Rohan Kumar",
        rating: 4,
        text: "Achha tha! From planning to execution, everything was flawless. We had a great experience with Amaravati Nagpur's event planning services.",
        image: "https://picsum.photos/604",
        profilePic: "https://picsum.photos/705",
        type: "contrast"
    },
    {
        name: "Sonia Singh",
        rating: 5,
        text: "Waah! Exceptional service and attention to detail. Our anniversary celebration at Amaravati Nagpur was unforgettable!",
        image: "https://picsum.photos/605",
        profilePic: "https://picsum.photos/707",
        type: "warm"
    },
    {
        name: "Vikram Jain",
        rating: 4,
        text: "Thoda thoda accha tha! The team at Amaravati Nagpur was incredibly organized and creative. We had a great time at our event!",
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
        <section className='bg-gray-100 min-h-screen p-20'>
            <div className="max-w-5xl mx-auto py-10">

                <div className="text-center mb-8">
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
                                <div className={`rounded-xl shadow-lg px-0 p-1 h-[450px] flex flex-col ${testimonial.type === 'mint'
                                    ? 'bg-teal-50'
                                    : testimonial.type === 'contrast'
                                        ? 'bg-white'
                                        : 'bg-orange-50'
                                    }`}>

                                    <img
                                        src={testimonial.image}
                                        alt={`Testimonial by ${testimonial.name}`}
                                        className="w-full h-64 object-cover rounded-lg mb-6" // Ensure the image takes full width of the card
                                    />
                                    <p className="text-gray-600 italic m-4 flex-grow">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.profilePic}
                                            alt={testimonial.name}
                                            className="w-10 h-10 m-4 rounded-full object-cover border-2 border-white shadow-sm"
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-800">{testimonial.name}</div>
                                            <div className="flex text-yellow-400">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <svg key={i} className="w-4 h-5 fill-current" viewBox="0 0 20 20">
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
                        className="absolute left-0 top-2/3 -translate-y-1/2 text-secondary hover:text-teal-800 cursor-pointer"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>

                    <div
                        onClick={nextSlide}
                        className="absolute right-0 top-2/3 -translate-y-1/2 text-secondary hover:text-teal-800 cursor-pointer"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                <div className="flex justify-center gap-1 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-teal-500 w-6' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;