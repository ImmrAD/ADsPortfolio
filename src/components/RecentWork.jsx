// components/RecentWork.jsx
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    label: "Client's Website",
    title: "ASP Solar",
    description:
      "A web app for a solar panels selling and installation firm for showcasing their work and connecting with customers while sharing information about solar energy.",
    image: "/aspsolar.png",
    link: "https://aspsolar.in", // replace with actual link if different
  },
  {
    label: "Client's Website",
    title: "Clip Craftt",
    description:
      "A web app for showcasing the work of my client to future clients. A simple, elegant, and informative site built for a video editing agency.",
    image: "/clipcraftt.png",
    link: "https://clipcraftt.com", // replace with actual link if different
  },
];

const RecentWork = () => {
  return (
    <section id="work" className="min-h-screen py-16 px-6 sm:px-12 bg-gradient-to-r from-red-800 via-black to-rose-950 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400">
            Recent Work
          </h2>
          <p className="text-gray-400 mt-2">A collection of projects I've worked on</p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-center gap-8 bg-stone-400 rounded-xl p-6 backdrop-blur-md shadow-md`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-1/2 text-left">
                <p className="text-sm text-blue-400 font-semibold">{project.label}</p>
                <h3 className="text-2xl font-bold mt-1 mb-3">{project.title}</h3>
                <p className="bg-gradient-to-br from-[#531a88]/60 to-[#372154]/60 p-4 rounded-md text-sm text-gray-200 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Website Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:underline"
                  >
                    Visit Website <FaExternalLinkAlt className="inline-block" />
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
