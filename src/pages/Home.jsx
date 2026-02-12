import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 text-center">
            <div className="max-w-4xl space-y-8">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">
                    Explore the <span className="bg-gradient-to-r from-[#17CF63] to-[#FF8C00] bg-clip-text text-transparent">Great Outdoors</span> with Us
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Building the largest and most responsible trekking community in Karnataka.
                    Join us for unforgettable adventures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Link
                        to="/places"
                        className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        Explore Places
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-green-500 text-slate-700 hover:text-green-600 font-bold rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className="mt-20 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/40 shadow-xl shadow-slate-200/50 text-left space-y-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Expert Guides</h3>
                    <p className="text-slate-600">Our treks are led by experienced professionals who prioritize your safety and experience.</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/40 shadow-xl shadow-slate-200/50 text-left space-y-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Responsible Trekking</h3>
                    <p className="text-slate-600">We follow strict 'Leave No Trace' principles to preserve the beauty of nature for everyone.</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/40 shadow-xl shadow-slate-200/50 text-left space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Strong Community</h3>
                    <p className="text-slate-600">Join a vibrant community of outdoor enthusiasts and make lifelong friendships.</p>
                </div>
            </div>
        </main>
    );
};

export default Home;
