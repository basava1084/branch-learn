import React from 'react';
import { treks } from '../data/treks';
import TrekCard from '../components/TrekCard';

const Places = () => {
    return (
        <main className="w-full min-h-screen py-16 px-6 lg:px-0 flex justify-center bg-transparent">
            <div className="w-full max-w-[1200px] space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900">
                        Trekking <span className="text-green-600">Destinations</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover the most breathtaking trails across Karnataka. From lush green peaks to misty valleys.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treks.map((trek) => (
                        <TrekCard key={trek.id} trek={trek} />
                    ))}
                    {/* Repeat for visual variety if only one exists */}
                    {treks.length === 1 && [1, 2].map(i => (
                        <TrekCard key={`${treks[0].id}-${i}`} trek={{ ...treks[0], id: `${treks[0].id}-${i}` }} />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Places;
