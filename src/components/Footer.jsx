// components/Footer.jsx
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d011f] border-t border-purple-900 text-white py-6 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left Text */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} - Anand Dane, All rights reserved
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-6 text-xl text-white">
          <a
            href="https://github.com/ImmrAD"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/AnandDane_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/anand-dane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
