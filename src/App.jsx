import React from 'react';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
// Import other components as we create them

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff5ea] via-[#f0fdf4] to-[#e6fffa] font-sans text-slate-800 flex flex-col">
      <Header />

      <main className="w-full flex-grow flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div className="flex items-center justify-center p-8 lg:p-16 xl:p-24 bg-[#fdfbf7]/50">
            <div className="w-full max-w-xl">
              <ContactInfo />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center p-8 lg:p-16 xl:p-24 bg-white/30 backdrop-blur-md">
            <div className="w-full max-w-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
