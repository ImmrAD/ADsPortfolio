// components/Contact.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-4 sm:px-8 py-16 bg-gradient-to-r from-red-800 via-black to-rose-950 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-12">
        
        {/* Left Side: Contact Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            Contact
          </h2>

          <h3 className="text-2xl mt-8 mb-4 font-semibold text-cyan-400">Drop me a message</h3>
          <p className="text-gray-300 mb-8 max-w-lg">
            Connect with me for building exciting projects together or you can just say "Hi Anand".
          </p>

          <div className="space-y-6 text-base">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-tr from-purple-500 to-blue-500 p-3 rounded-full shadow-lg">
                <FaPhoneAlt />
              </div>
              <a href="tel:+917821023287" className="text-white hover:text-cyan-400 transition-colors duration-300">
                +91 7821023287
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-tr from-purple-500 to-blue-500 p-3 rounded-full shadow-lg">
                <FaEnvelope />
              </div>
              <a href="mailto:ananddane1@gmail.com" className="text-white hover:text-cyan-400 transition-colors duration-300">
                ananddane1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-tr from-purple-500 to-blue-500 p-3 rounded-full shadow-lg">
                <FaMapMarkerAlt />
              </div>
              {/* Universal Google Maps link that works on all devices */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mumbai,India"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                Mumbai, India
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form
          action="https://formsubmit.co/ananddane1@gmail.com"
          method="POST"
          className="w-full lg:w-1/2 bg-slate-800/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl space-y-6"
        >
          {/* FormSubmit Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          {/* TODO: Replace with your actual 'Thank You' page URL */}
          <input type="hidden" name="_next" value="https://your-domain.com/thank-you.html" />

          <div>
            <label className="block text-sm mb-2 font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Anand Dane"
              required
              className="w-full px-4 py-3 bg-[#222034] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-shadow"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="ananddane1@gmail.com"
              required
              className="w-full px-4 py-3 bg-[#222034] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-shadow"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="How can I help?"
              required
              className="w-full px-4 py-3 bg-[#222034] text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 transition-shadow"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-bold rounded-md hover:opacity-90 transition-opacity duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;