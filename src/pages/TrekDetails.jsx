import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { treks } from '../data/treks';
import { MapPin, Clock, Mountain, ArrowLeft, Calendar, ShieldCheck } from 'lucide-react';

const TrekDetails = () => {
    const { id } = useParams();
    const trek = treks.find(t => t.id === id) || treks[0]; // fallback to first trek for demo

    return (
        <main className="w-full min-h-screen bg-transparent pb-24">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-0 pt-12 space-y-12">
                <Link to="/places" className="inline-flex items-center gap-2 text-slate-500 hover:text-green-600 font-bold transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Places
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Image */}
                    <div className="h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl">
                        <img src={trek.image} alt={trek.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Right Side - Info */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <div className="space-y-4">
                            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                {trek.difficulty}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                                {trek.title}
                            </h1>
                            <div className="flex items-center gap-2 text-slate-500 text-lg">
                                <MapPin className="w-5 h-5 text-green-500" />
                                <span>{trek.location}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 bg-white/50 backdrop-blur-sm p-8 rounded-[32px] border border-white/40 shadow-xl">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase">
                                    <Clock className="w-4 h-4" />
                                    Duration
                                </div>
                                <div className="text-xl font-bold text-slate-800">{trek.duration}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase">
                                    <Mountain className="w-4 h-4" />
                                    Altitude
                                </div>
                                <div className="text-xl font-bold text-slate-800">{trek.altitude}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase">
                                    <Calendar className="w-4 h-4" />
                                    Best Season
                                </div>
                                <div className="text-xl font-bold text-slate-800">{trek.bestSeason}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase">
                                    <ShieldCheck className="w-4 h-4" />
                                    Price
                                </div>
                                <div className="text-xl font-bold text-slate-800">₹{trek.price}</div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <button className="w-full py-5 bg-green-500 hover:bg-green-600 text-white font-black text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                Book This Trek
                            </button>
                            <p className="text-center text-slate-400 text-sm">
                                * Includes transport, food, permits and guide charges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TrekDetails;
