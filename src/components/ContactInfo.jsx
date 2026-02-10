import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className="flex flex-col h-full justify-center space-y-8 pr-0 lg:pr-12">
            {/* Heading Group */}
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                    Let's Talk
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                    Got questions about a trek? Want to partner with us?
                    <br className="hidden md:block" />
                    We'd love to hear from you.
                </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-700">
                    <div className="p-3 bg-white rounded-full shadow-sm text-green-500">
                        <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium">hello@nbtrekkers.com</span>
                </div>

                <div className="flex items-center gap-4 text-slate-700">
                    <div className="p-3 bg-white rounded-full shadow-sm text-green-500">
                        <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-medium">+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-4 text-slate-700">
                    <div className="p-3 bg-white rounded-full shadow-sm text-green-500">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Indiranagar, Bengaluru, KA</span>
                </div>
            </div>

            {/* WhatsApp Button */}
            <div>
                <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                </a>
            </div>

            {/* Social Links */}
            <div className="pt-8 flex gap-4">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="p-2 text-slate-400 hover:text-green-500 hover:bg-white rounded-full transition-all"
                >
                    <FaInstagram className="w-6 h-6" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with us on LinkedIn"
                    className="p-2 text-slate-400 hover:text-green-500 hover:bg-white rounded-full transition-all"
                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                    className="p-2 text-slate-400 hover:text-green-500 hover:bg-white rounded-full transition-all"
                >
                    <FaTwitter className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
