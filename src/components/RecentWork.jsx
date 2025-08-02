import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    label: "Client's Website",
    title: "ASP Solar",
    description:
      "A web app for a solar panels selling and installation firm for showcasing their work and connecting with customers while sharing information about solar energy.",
    image: "/aspsolar.png",
    link: "https://aspsolar.in",
  },
  {
    label: "Client's Website",
    title: "Clip Craftt",
    description:
      "A web app for showcasing the work of my client to future clients. A simple, elegant, and informative site built for a video editing agency.",
    image: "/clipcraftt.png",
    link: "https://clipcraftt.com",
  },
];

const RecentWork = () => {
  return (
    <section id="work" className="min-h-screen py-16 px-4 sm:px-8 bg-gradient-to-r from-red-800 via-black to-rose-950 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400">
            Recent Work
          </h2>
          <p className="text-gray-400 mt-2">A collection of projects I've worked on</p>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                /* --- MOBILE STYLES (Image as background) --- */
                relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl
                
                /* --- DESKTOP STYLES (Your original zigzag layout) --- */
                lg:aspect-auto lg:flex lg:p-8 lg:gap-8 lg:items-center
                lg:bg-slate-800/40 lg:backdrop-blur-md lg:shadow-lg
                ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}
              `}
            >
              {/* Image Container: Acts as a background on mobile, a block on desktop */}
              <div className="absolute inset-0 z-0 lg:relative lg:w-1/2 lg:rounded-lg lg:overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Overlay for text readability (Mobile Only) */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent lg:hidden"></div>

              {/* Text Block: Overlays on mobile, sits beside on desktop */}
              <div className="relative z-20 flex flex-col justify-end h-full p-6 lg:w-1/2 lg:p-0">
                <p className="text-sm text-cyan-400 font-semibold">{project.label}</p>
                <h3 className="text-3xl lg:text-4xl font-bold mt-1 mb-4">{project.title}</h3>
                
                {/* Description has different styling for mobile vs desktop */}
                <p className="text-gray-300 mb-6 leading-relaxed lg:bg-gradient-to-br from-[#531a88]/60 to-[#372154]/60 lg:p-4 lg:rounded-md">
                  {project.description}
                </p>

                {/* Website Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:underline"
                  >
                    Visit Website <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;