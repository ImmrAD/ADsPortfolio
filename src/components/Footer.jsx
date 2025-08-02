// components/Footer.jsx
import React, { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata', // IST
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <footer className="relative overflow-hidden bg-[#0f0f1a] border-t-2 border-cyan-400/30 text-white py-8 px-4 sm:px-8">
      
      {/* Background grid pattern from the About section (NOW WITH RED TINT) */}
      <div className="absolute inset-0 opacity-30 z-0 pointer-events-none">
        <div
          className="w-full h-full bg-[length:55px_55px] bg-[rgba(220,38,38,0.3)]" // <-- Correction Applied Here
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(220,38,38,0.3) 25%, rgba(220,38,38,0.3) 26%, transparent 27%, transparent 74%, rgba(220,38,38,0.3) 75%, rgba(220,38,38,0.3) 76%, transparent 77%, transparent),
                              linear-gradient(90deg, transparent 24%, rgba(220,38,38,0.3) 25%, rgba(220,38,38,0.3) 26%, transparent 27%, transparent 74%, rgba(220,38,38,0.3) 75%, rgba(220,38,38,0.3) 76%, transparent 77%, transparent)`
          }}
        ></div>
      </div>

      {/* Content wrapper to ensure it sits on top of the background grid */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <p className="text-base text-gray-300">
            © 2025 Anand Dane. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Crafted with ❤️ from Mumbai, India.
          </p>
          <div className="mt-2 bg-white/5 inline-block px-3 py-1 rounded-full">
            <p className="text-sm text-cyan-400 font-mono">
              {formattedTime}
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center gap-6">
          <div className="flex items-center space-x-4 text-xl">
            <a href="https://github.com/ImmrAD" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-white/5 rounded-full hover:bg-pink-500/20 hover:text-white transition-all duration-300">
              <FaGithub />
            </a>
            <a href="https://x.com/AnandDane_" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-3 bg-white/5 rounded-full hover:bg-pink-500/20 hover:text-white transition-all duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/anand-dane" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-white/5 rounded-full hover:bg-pink-500/20 hover:text-white transition-all duration-300">
              <FaLinkedin />
            </a>
          </div>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 text-sm bg-white/5 px-4 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer transition-all"
          >
            <FaArrowUp />
            <span>Back to Top</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;