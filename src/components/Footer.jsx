import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#e0e7ff] text-slate-700 pt-10 pb-8 w-full mt-0">
            <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                {/* Left Column: Logo & Description */}
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
                        <div className="text-xl font-black tracking-tight">
                            <span className="bg-gradient-to-r from-[#17CF63] to-[#FF8C00] bg-clip-text text-transparent">
                                Namma Bengaluru Trekkers
                            </span>
                        </div>
                    </div>
                    <p className="text-base leading-relaxed max-w-sm text-slate-600">
                        Building the largest and most responsible trekking community in Karnataka. Come, explore the outdoors with us.
                    </p>
                </div>

                {/* Middle Column: Quick Links */}
                <div className="flex flex-col items-start md:pl-16">
                    <h3 className="text-lg font-bold mb-6 text-slate-900">Quick Links</h3>
                    <ul className="space-y-3 text-base font-medium">
                        <li><a href="#" className="hover:text-green-600 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-green-600 transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-green-600 transition-colors">Places</a></li>
                        <li><a href="#" className="hover:text-green-600 transition-colors">About Us</a></li>
                    </ul>
                </div>

                {/* Right Column: Contact Us */}
                <div className="flex flex-col items-start">
                    <h3 className="text-lg font-bold mb-6 text-slate-900">Contact Us</h3>
                    <ul className="space-y-4 text-base">
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="w-5 h-5 text-slate-600 shrink-0" />
                            <span>hello@nbtrekkers.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="w-5 h-5 text-slate-600 shrink-0" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="w-5 h-5 text-slate-600 mt-1 shrink-0" />
                            <span>Indiranagar, Bengaluru</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-slate-300 text-center text-xs text-slate-500">
                <p>© 2026 Namma Bengaluru Trekkers. All rights reserved.</p>
                <p className="mt-2">Powered by Dev Creations and Solutions</p>
            </div>
        </footer>
    );
};

export default Footer;
