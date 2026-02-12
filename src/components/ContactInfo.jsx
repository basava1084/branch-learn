import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className="flex flex-col h-full space-y-8 pr-0 lg:pr-12">
            {/* Heading Group */}
            <div className="space-y-4">
                <h1 className="text-[48px] leading-[48px] font-extrabold text-[#0F1A16] tracking-[-1.44px]">
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
                    <div className="p-4 bg-[#17CF63]/10 rounded-full text-[#17CF63]">
                        <FiMail className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-lg text-slate-900">hello@nbtrekkers.com</span>
                </div>

                <div className="flex items-center gap-4 text-slate-700">
                    <div className="p-4 bg-[#17CF63]/10 rounded-full text-[#17CF63]">
                        <FiPhone className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-lg text-slate-900">+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-4 text-slate-700">
                    <div className="p-4 bg-[#17CF63]/10 rounded-full text-[#17CF63]">
                        <FiMapPin className="w-6 h-6" />
                    </div>
                    <span className="font-medium text-lg text-slate-900">Indiranagar, Bengaluru, KA</span>
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
            <div className="pt-8 flex gap-6">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="p-3 bg-white rounded-full shadow-lg shadow-slate-200/60 text-slate-500 hover:text-pink-600 hover:shadow-xl hover:shadow-pink-100 transform transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                >
                    <FaInstagram className="w-6 h-6" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with us on LinkedIn"
                    className="p-3 bg-white rounded-full shadow-lg shadow-slate-200/60 text-slate-500 hover:text-blue-700 hover:shadow-xl hover:shadow-blue-100 transform transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                    className="p-3 bg-white rounded-full shadow-lg shadow-slate-200/60 text-slate-500 hover:text-sky-500 hover:shadow-xl hover:shadow-sky-100 transform transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                >
                    <FaTwitter className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
