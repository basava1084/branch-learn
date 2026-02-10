import React from 'react';
import Logo from './Logo';

const Header = () => {
    const [imgError, setImgError] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#e6e6fa] backdrop-blur-sm shadow-sm">
            <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <a href="/" className="hover:opacity-95 transition-opacity">
                        {!imgError ? (
                            <img
                                src="/logo.png"
                                alt="Namma Bengaluru Trekkers"
                                className="h-16 w-auto object-contain"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <Logo />
                        )}
                    </a>
                    <div className="flex items-center text-2xl md:text-3xl font-bold tracking-tight">
                        <span className="text-green-500">Namma</span>
                        <span className="text-[#84cc16] mx-2">Bengaluru</span>
                        <span className="text-orange-500">Trekkers</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                    <a href="#" className="hover:text-green-600 transition-colors">Home</a>
                    <a href="#" className="hover:text-green-600 transition-colors">Places</a>
                    <a href="#" className="hover:text-green-600 transition-colors">About Us</a>
                    <a href="#" className="text-green-600 font-semibold">Contact Us</a>
                </nav>

                {/* Mobile Menu Button (Optional for now) */}
                <button className="md:hidden text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
