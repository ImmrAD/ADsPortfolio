import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Effect to lock body scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to restore scroll if the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const linkProps = {
    smooth: true,
    duration: 800,
    offset: -60,
    className: "cursor-pointer text-2xl hover:text-purple-300 transition-colors",
    onClick: () => setIsOpen(false),
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-gradient-to-r from-red-800 via-black to-rose-950 w-full p-1 shadow-md">
        <div className="relative mx-auto flex h-16 items-center justify-between px-4 md:px-10 text-white font-semibold tracking-wide">
          
          {/* --- DESKTOP LAYOUT (Unchanged) --- */}
          <div className="hidden md:flex w-full items-center justify-between">
            <div className="flex flex-1 justify-evenly">
              <Link to="home" {...linkProps} className="text-base">HOME</Link>
              <Link to="about" {...linkProps} className="text-base">ABOUT</Link>
            </div>
            <img src="/logo_png_white.png" alt="Logo" className="h-12 w-auto" />
            <div className="flex flex-1 justify-evenly">
              <Link to="work" {...linkProps} className="text-base">WORK</Link>
              <Link to="contact" {...linkProps} className="text-base">CONTACT</Link>
            </div>
          </div>

          {/* --- MOBILE LAYOUT --- */}
          <div className="md:hidden flex w-full items-center justify-between">
            <div className="w-8"></div>
            <img src="/logo_png_white.png" alt="Logo" className="h-10 w-auto" />
            <button
              onClick={() => setIsOpen(true)} // This button now only opens the menu
              className="p-2 rounded-md"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- FULL-SCREEN MOBILE MENU --- */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-95"
          id="mobile-menu"
        >
          {/* Close button inside the overlay */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-md"
            aria-label="Close menu"
          >
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          {/* Centered navigation links */}
          <div className="flex flex-col items-center space-y-8 text-white">
            <Link to="home" {...linkProps}>HOME</Link>
            <Link to="about" {...linkProps}>ABOUT</Link>
            <Link to="work" {...linkProps}>WORK</Link>
            <Link to="contact" {...linkProps}>CONTACT</Link>
          </div>
        </div>
      )}
    </>
  );
}