import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Branding & Copyright */}
                <div>
                    <h2 className="text-xl font-bold text-green-400">ASHOKA</h2>
                    <p className="text-sm mt-2">
                        © 2025 MERA BUSINESS EVENT MANAGEMENT. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-xs mt-1">
                        DISCLAIMER: PRICES AND SERVICES ARE SUBJECT TO CHANGE. CONTACT US FOR THE LATEST DETAILS.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold text-lg ml-14 ">Navigation</h3>
                    <ul className="mt-2 space-y-2 list-none ml-14 ">
                        <li><a href="/" className="text-white font-bold no-underline hover:underline">Home</a></li>
                        <li><a href="/services" className="text-white font-bold no-underline hover:underline">Our Services</a></li>
                        <li><a href="/gallery" className="text-white font-bold no-underline hover:underline">Gallery</a></li>
                        <li><a href="/about" className="text-white font-bold no-underline hover:underline">About</a></li>
                        {/* <li><a href="/account" className="text-white font-bold no-underline hover:underline">Account</a></li>
                        <li><a href="/contact" className="text-white font-bold no-underline hover:underline">Contact</a></li> */}
                    </ul>
                </div>

                <ul className="mt-2 space-y-2 list-none">
                <li><a href="/account" className="text-white font-bold no-underline hover:underline">Account</a></li>
                <li><a href="/contact" className="text-white font-bold no-underline hover:underline">Contact</a></li>
                </ul>



                {/* Importance */}
                <div>
                    <h3 className="font-semibold text-lg">Importance</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/privacy-policy" className="text-white font-bold no-underline hover:underline">Privacy & Policy</a></li>
                        <li><a href="/team-combination" className="text-white font-bold no-underline hover:underline">Team & Combination</a></li>
                        <li><a href="/faq" className="text-white font-bold no-underline hover:underline">FAQs</a></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="font-semibold text-lg">Subscribe</h3>
                    <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded p-2 mt-2" />
                    <button className="bg-red-500 text-white py-2 px-6 rounded-lg mt-2 hover:bg-red-700 transition duration-300">
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            {/* Contact Email */}
            <div className="text-center mt-6 text-green-400 font-semibold">
                📩 ashokafae@gmail.com
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-green-400 font-semibold mt-4">
                ⓒ ashoka2025
            </div>
        </footer>
    );
};

export default Footer;
