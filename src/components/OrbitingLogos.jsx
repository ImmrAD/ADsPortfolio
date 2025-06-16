// OrbitingLogos.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const iconsOuter = [
  { Icon: FaHtml5, label: "HTML" },
  { Icon: FaCss3Alt, label: "CSS" },
  { Icon: FaJs, label: "JavaScript" },
  { Icon: FaReact, label: "React" },
  { Icon: FaNodeJs, label: "Node.js" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: FaAws, label: "AWS" },
];

const iconsInner = [
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiNextdotjs, label: "Next.js" },
];

const OrbitingLogos = () => {
  return (
    <div className="relative w-[300px] h-[300px] mx-auto my-10">
      {/* Outer Orbit */}
      <motion.div
        className="absolute inset-0 rounded-full border border-purple-500 animate-spin-slow"
      >
        {iconsOuter.map((item, i) => {
          const angle = (360 / iconsOuter.length) * i;
          const x = 155 * Math.cos((angle * Math.PI) / 180);
          const y = 155 * Math.sin((angle * Math.PI) / 180);
          return (
            <item.Icon
              key={i}
              title={item.label}
              className="absolute text-white text-2xl w-10 h-10"
              style={{ left: `calc(50% + ${x}px - 16px)`, top: `calc(50% + ${y}px - 16px)` }}
            />
          );
        })}
      </motion.div>

      {/* Inner Orbit */}
      <motion.div
        className="absolute inset-13 rounded-full border border-blue-500 animate-spin-reverse-slower"
      >
        {iconsInner.map((item, i) => {
          const angle = (360 / iconsInner.length) * i;
          const x = 90 * Math.cos((angle * Math.PI) / 180);
          const y = 90 * Math.sin((angle * Math.PI) / 180);
          return (
            <item.Icon
              key={i}
              title={item.label}
              className="absolute text-white text-xl w-10 h-10"
              style={{ left: `calc(50% + ${x}px - 12px)`, top: `calc(50% + ${y}px - 12px)` }}
            />
          );
        })}
      </motion.div>

      {/* Center Dot or Your Logo */}
      <div className="absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black flex items-center justify-center">
        <FaGitAlt className="text-white text-2xl" title="Git" />
      </div>
    </div>
  );
};

export default OrbitingLogos;
