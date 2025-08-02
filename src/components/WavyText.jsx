import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const WavyText = ({ text, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({   triggerOnce: false, 
    threshold: 0.3,   });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { y: 0 },
    visible: {
      y: [-12, 0],
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <h1
      ref={ref}
      className={`text-5xl p-2 flex flex-wrap font-bold text-cyan-400 ${className}`}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={child} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </h1>
  );
};

export default WavyText;
