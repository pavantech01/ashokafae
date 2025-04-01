import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";

const images = [
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1742394734/6_v8ixbe.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743324129/Muslim_Nikah_Ceremony_Decoration_Idea_s_gs8ygx.jpg",
    "https://res.cloudinary.com/dauyjkqmu/image/upload/v1743155869/0da2cac5-d59e-44bd-ae3f-5f311e2c280d_nxm9m2.jpg",
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className="relative w-full h-full">
                {images.map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`Slide ${index}`}
                        className="absolute w-full h-full object-cover transition-opacity duration-1000"
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                    />
                ))}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="font-dancing text-lg font-semibold tracking-wide md:text-5xl mb-8">
                        We Will Plan Details About <br /> Your Wedding
                    </h1>

                </div>

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-transparent border-none text-white"
                >
                    <MdChevronLeft className="w-8 h-8" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none p-3 rounded-full text-white"
                >
                    <MdChevronRight className="w-8 h-8" />
                </button>

                {/* Dots Navigation */}
                <div className="absolute bottom-6 flex space-x-2 left-1/2 transform -translate-x-1/2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;
