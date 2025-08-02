import { useState } from "react";
import OrbitingLogos from "./OrbitingLogos";

// A reusable Accordion Item component
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 py-8">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-4"
      >
        <span className="text-xl font-medium text-cyan-400">{title}</span>
        {/* Simple Chevron icon that rotates based on state */}
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {/* Content panel that expands/collapses */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="p-4 pt-0 text-gray-300 text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  // State to track which accordion item is open. '1' is open by default.
  const [openIndex, setOpenIndex] = useState(1);

  const handleItemClick = (index) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="about" 
      className="relative bg-[#0f0f1a] text-white py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30 z-0 pointer-events-none">
        <div 
          className="w-full h-full bg-[length:55px_55px] bg-[rgba(220,38,38,0.3)]"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(220,38,38,0.3) 25%, rgba(220,38,38,0.3) 26%, transparent 27%, transparent 74%, rgba(220,38,38,0.3) 75%, rgba(220,38,38,0.3) 76%, transparent 77%, transparent),
                              linear-gradient(90deg, transparent 24%, rgba(220,38,38,0.3) 25%, rgba(220,38,38,0.3) 26%, transparent 27%, transparent 74%, rgba(220,38,38,0.3) 75%, rgba(220,38,38,0.3) 76%, transparent 77%, transparent)`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-8 text-white">
          About Me
        </h2>
        
        {/* Accordion Container */}
        <div className="w-full">
          <AccordionItem
            title="Technical Profile"
            isOpen={openIndex === 1}
            onClick={() => handleItemClick(1)}
          >
            I'm a MERN stack developer based in Mumbai, with a strong focus on building scalable and performant web applications. My frontend expertise includes React, Next.js, and Tailwind CSS. On the backend, I work with Node.js, Express, MongoDB, and PostgreSQL.
          </AccordionItem>
          
          <AccordionItem
            title="Professional Experience"
            isOpen={openIndex === 2}
            onClick={() => handleItemClick(2)}
          >
            I have hands-on experience deploying applications using Docker and AWS, and I’m comfortable working across the full development lifecycle. I'm adept at collaborating in remote teams, following agile workflows, and writing code that aligns with best practices.
          </AccordionItem>

          <AccordionItem
            title="Personal Note"
            isOpen={openIndex === 3}
            onClick={() => handleItemClick(3)}
          >
            Outside of development, I enjoy spending time in nature, which helps me stay focused and creative. I'm always eager to take on new challenges and contribute to projects that make a meaningful impact.
          </AccordionItem>
        </div>
      </div>

      <OrbitingLogos />
    </section>
  );
}