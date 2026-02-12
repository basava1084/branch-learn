import React from 'react';
import { Clock, Send } from 'lucide-react';

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

export default ContactForm;
