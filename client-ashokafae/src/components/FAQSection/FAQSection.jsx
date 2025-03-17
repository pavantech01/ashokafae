import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "What Types Of Events Do You Specialize In?",
        answer: "We Handle Weddings, Corporate Events, Birthdays, Anniversaries, Social Gatherings, And More.",
    },
    {
        question: "What Services Do You Offer?",
        answer: "We Plan And Manage All Types Of Events, Including Weddings, Corporate Events, Parties, And More.",
    },
    {
        question: "How Much Do Your Services Cost?",
        answer: "Prices Vary Based On Event Type, Size, And Requirements. We Offer Budget-Friendly Options.",
    },
    {
        question: "Can You Customize The Event As Per My Needs?",
        answer: "Yes! We Tailor Every Event To Match Your Preferences And Budget.",
    },
    {
        question: "Do You Handle Everything, Including Decorations And Catering?",
        answer: "Yes, We Manage Everything From Venue Selection To Decorations, Catering, And Entertainment.",
    },
    {
        question: "How Early Should I Book Your Services?",
        answer: "Booking In Advance Is Recommended. But We Also Handle Last-Minute Requests Based On Availability.",
    },
    {
        question: "How Do I Make A Booking?",
        answer: "You Can Contact Us Via Phone, Email, Or WhatsApp To Discuss Your Event And Confirm Your Booking.",
    },
    {
        question: "Do You Provide Venue Suggestions?",
        answer: "Yes, We Help Find The Perfect Venue Based On Your Event Needs And Budget.",
    },
    {
        question: "What Happens If There's A Last-Minute Change?",
        answer: "We Handle Last-Minute Changes Professionally And Adjust Plans As Needed.",
    },
    {
        question: "How Can I Contact You?",
        answer: "You Can Reach Us Via Call, Email, Or WhatsApp. **Contact Us Today!** ",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-16">
            <div className="max-w-5xl mx-auto p-6">
                {/* Title Section */}
                <h2 className="text-center text-xl mt-6 font-semibold text-gray-600">Have Any Question</h2>
                <h1 className="text-4xl font-semibold text-center my-3">Frequently Asked Questions</h1>
                <hr className="w-3/6 h-1 bg-green-500 mx-auto mb-6" />

                {/* FAQ Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg shadow-sm bg-white">
                            <button
                                className="w-full text-left p-4 flex justify-between items-center text-lg font-medium bg-gray-100 hover:bg-gray-200 transition-all"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <FaChevronDown
                                    className={`transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="p-4 text-gray-700 border-t">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
