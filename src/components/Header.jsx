import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
    const [imgError, setImgError] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 h-[100px] bg-[#D7D7EB] border-b border-black shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <div className="w-full h-full px-6 md:px-12 flex justify-between items-center gap-4">
                <div className="flex items-center gap-2 md:gap-3">
                    <Link to="/" className="hover:opacity-95 transition-opacity">
                        {!imgError ? (
                            <img
                                src="/logo.png"
                                alt="Namma Bengaluru Trekkers"
                                className="h-12 md:h-16 w-auto object-contain"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <Logo />
                        )}
                    </Link>
                    <div className="text-lg md:text-2xl lg:text-3xl font-black tracking-tight">
                        <span className="bg-gradient-to-r from-[#17CF63] to-[#FF8C00] bg-clip-text text-transparent">
                            Namma Bengaluru Trekkers
                        </span>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-12 font-medium text-slate-600">
                    <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
                    <Link to="/places" className="hover:text-green-600 transition-colors">Places</Link>
                    <Link to="#" className="hover:text-green-600 transition-colors">About Us</Link>
                    <Link to="/contact" className="text-green-600 font-semibold">Contact Us</Link>
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
