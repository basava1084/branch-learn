import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Mountain } from 'lucide-react';

const TrekCard = ({ trek }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={trek.image}
                    alt={trek.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-green-600 font-bold text-sm shadow-sm">
                    ₹{trek.price}
                </div>
            </div>

            <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                    {trek.title}
                </h3>

                <div className="flex flex-col gap-2 text-slate-500 text-sm">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#17CF63]" />
                        <span>{trek.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#FF8C00]" />
                        <span>{trek.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mountain className="w-4 h-4 text-blue-500" />
                        <span>{trek.altitude}</span>
                    </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {trek.difficulty}
                    </span>
                    <Link
                        to={`/trek/${trek.id}`}
                        className="text-green-600 font-bold text-sm hover:underline flex items-center gap-1"
                    >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrekCard;
