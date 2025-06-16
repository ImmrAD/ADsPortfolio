import OrbitingLogos from "./OrbitingLogos";
export default function About() {
  return (
    <section id="about" className="relative bg-[#0f0f1a] text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30 z-0 pointer-events-none">
        <div className="w-full h-full bg-[length:55px_55px] bg-[rgba(114,114,114,0.3)]"
             style={{
               backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(114,114,114,0.3) 25%, rgba(114,114,114,0.3) 26%, transparent 27%, transparent 74%, rgba(114,114,114,0.3) 75%, rgba(114,114,114,0.3) 76%, transparent 77%, transparent),
                                linear-gradient(90deg, transparent 24%, rgba(114,114,114,0.3) 25%, rgba(114,114,114,0.3) 26%, transparent 27%, transparent 74%, rgba(114,114,114,0.3) 75%, rgba(114,114,114,0.3) 76%, transparent 77%, transparent)`
             }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          About
        </h2>
        
        <p className="text-lg leading-8 -mx-28 text-gray-300 text-justify ">
         I'm a MERN stack developer based in Mumbai, India, with a strong focus on building scalable, accessible, and performant web applications. My frontend expertise includes React, Next.js, TypeScript, and Tailwind CSS, allowing me to craft modern UIs with clean, maintainable code. On the backend, I work extensively with Node.js, Express, and MongoDB, and I'm also experienced with PostgreSQL for relational data needs.

I have hands-on experience deploying applications using Docker and AWS, and I’m comfortable working across the full development lifecycle—from planning and architecture to deployment and optimization. I'm adept at collaborating in remote teams, following agile workflows, and writing code that aligns with best practices and business goals.

Outside of development, I enjoy spending time in nature, which helps me stay focused and creative. I'm always eager to take on new challenges and contribute to projects that make a meaningful impact.
        </p>
      </div>
        <OrbitingLogos></OrbitingLogos>
      <div>
      </div>
    </section>
  );
}
