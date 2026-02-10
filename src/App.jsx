import React from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// Import other components as we create them

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5ea] via-[#f0fdf4] to-[#e6fffa] font-sans text-slate-800 flex flex-col">
      <Header />

      <main className="w-full min-h-screen flex flex-col">
        <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start px-6 md:px-12 pt-12 pb-16 lg:pt-24 lg:pb-24 bg-[#fdfbf7]/50 min-h-full">
            <div className="w-full max-w-xl">
              <ContactInfo />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center px-6 md:px-12 pt-12 pb-16 lg:pt-24 lg:pb-24 bg-white/30 backdrop-blur-md min-h-full">
            <div className="w-full max-w-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
