import React from 'react';
import { Mountain, Trees, User } from 'lucide-react';

const Logo = () => {
    return (
        <div className="relative w-16 h-16 flex items-center justify-center select-none">
            {/* Sun Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-orange-400 to-yellow-300 shadow-sm"></div>

            {/* Silhouette Elements */}
            <div className="relative z-10 text-slate-900 w-full h-full flex items-end justify-center pb-1 overflow-hidden rounded-full">
                {/* Trees Right */}
                <div className="absolute right-0 bottom-3 text-emerald-900">
                    <Trees size={20} fill="currentColor" />
                </div>

                {/* Hiker/Mountain Center */}
                <div className="absolute bottom-1 left-4 text-slate-800">
                    <User size={24} fill="currentColor" />
                </div>

                {/* Mountain Bg */}
                <div className="absolute bottom-0 left-0 text-emerald-800 opacity-80">
                    <Mountain size={44} fill="currentColor" />
                </div>
            </div>
        </div>
    );
};

export default Logo;
