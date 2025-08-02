// components/Contact.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 sm:px-12 py-16 bg-gradient-to-r from-red-800 via-black to-rose-950 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            Contact
          </h2>

          <h3 className="text-2xl mt-8 mb-4 font-semibold text-cyan-400">Drop me a message</h3>
          <p className="text-gray-300 mb-8">
           Connect with me for building exciting projects together or you can just say "Hi Anand"
          </p>

          <div className="space-y-6 text-base">
            <div className="flex items-center  gap-4">
              <div className="bg-gradient-to-tr from-purple-500 to-blue-500 p-3 rounded-full">
                <FaPhoneAlt />
              </div>
             <a href="tel:+917821023287" className="text-white hover:text-cyan-400 transition">
              +91 7821023287
             </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-tr from-purple-500 to-blue-500 p-3 rounded-full">
                <FaEnvelope />
              </div>
              <a href="mailto:ananddane1@gmail.com" className="text-white hover:text-cyan-400 transition">
                ananddane1@gmail.com
              </a>

            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-tr from-purple-500 to-blue-500 p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
             <a
                href="https://maps.apple.com/?q=Mumbai,+India"
                onClick={(e) => {
                    const isApple = /iPad|iPhone|iPod/.test(navigator.userAgent);
                    if (!isApple) {
                    e.preventDefault();
                    window.open("https://www.google.com/maps/search/?api=1&query=Mumbai,+India", "_blank");
                    }
                }}
                className="text-white hover:text-cyan-400 transition"
                >
                Mumbai, India
                </a>

            </div>
          </div>
        </div>

        {/* Right Side */}
       <form
  action="https://formsubmit.co/ananddane1@gmail.com"
  method="POST"
  className="lg:w-1/2 bg-stone-400 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6"
>
  {/* Hidden fields */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

  <div>
    <label className="block text-sm mb-1">Name</label>
    <input
      type="text"
      name="name"
      placeholder="Anand Dane"
      required
      className="w-full px-4 py-3 bg-[#222034] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>

  <div>
    <label className="block text-sm mb-1">Email</label>
    <input
      type="email"
      name="email"
      placeholder="ananddane1@gmail.com"
      required
      className="w-full px-4 py-3 bg-[#222034] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  </div>

  <div>
    <label className="block text-sm mb-1">Message</label>
    <textarea
      name="message"
      rows="4"
      placeholder="How can I help?"
      required
      className="w-full px-4 py-3 bg-[#222034] text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-500"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-bold rounded-md hover:opacity-90 transition"
  >
    Send message
  </button>
</form>

      </div>
    </section>
  );
};

export default Contact;
