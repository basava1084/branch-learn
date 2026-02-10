import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#e0e7ff] text-slate-700 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left Column: Logo & Description */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        {/* Using a placeholder for the logo image if actual component re-use is complex, 
                 or simply using the same structure as Header. 
                 Since I can't easily reuse the logic with state from Header without extracting it,
                 I'll just duplicate the image part for now or use the text.
                 The image shows the logo icon + text. */}
                        <div className="bg-white p-1 rounded-sm">
                            <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
                        </div>
                        <div className="flex items-center text-xl font-bold tracking-tight">
                            <span className="text-green-600">Namma</span>
                            <span className="text-[#84cc16] mx-1">Bengaluru</span>
                            <span className="text-orange-500">Trekkers</span>
                        </div>
                    </div>
                    <p className="text-sm border-l-2 border-slate-400 pl-4 leading-relaxed max-w-xs">
                        Building the largest and most responsible trekking community in Karnataka. Come, explore the outdoors with us.
                    </p>
                </div>

                {/* Middle Column: Quick Links */}
                <div className="md:ml-auto">
                    <h3 className="text-lg font-bold mb-6 text-slate-900">Quick Links</h3>
                    <ul className="space-y-3 text-sm font-medium">
                        <li><a href="#" className="hover:text-green-600 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-green-600 transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-green-600 transition-colors">Places</a></li>
                        <li><a href="#" className="hover:text-green-600 transition-colors">About Us</a></li>
                    </ul>
                </div>

                {/* Right Column: Contact Us */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-slate-900">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-slate-600" />
                            <span>hello@nbtrekkers.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-slate-600" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-slate-600 mt-0.5" />
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
