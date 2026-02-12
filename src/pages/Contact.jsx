import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Clock } from 'lucide-react';

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

const ContactForm = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 md:p-12">
      <form className="space-y-6">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full bg-slate-50 border border-transparent focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 transition-all outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full bg-slate-50 border border-transparent focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 transition-all outline-none"
            />
          </div>

          <div>
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full bg-slate-50 border border-transparent focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 transition-all outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">How can we help?</label>
            <textarea
              id="message"
              rows="4"
              placeholder="How can we help?"
              className="w-full bg-slate-50 border border-transparent focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 transition-all outline-none resize-none"
            ></textarea>
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <span>Send Message</span>
        </button>

        <div className="flex items-center justify-center gap-2 text-slate-400 text-sm pt-2">
          <Clock className="w-4 h-4" />
          <span>We usually respond within 24 hours.</span>
        </div>
      </form>
    </div>
  );
};


const Contact = () => {
  return (
    <main className="w-full min-h-screen flex justify-center bg-transparent">
      <div className="w-full max-w-[1200px] px-6 lg:px-0 pt-[50px] pb-24 flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">
        {/* Left Section */}
        <div className="w-full lg:w-[465px] flex-shrink-0">
          <ContactInfo />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[559px] flex-shrink-0">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
