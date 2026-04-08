import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { containerStagger, fadeUp, fadeInScale } from "../animations/variants"; // adjust path

const projects = [
  {
    title: "Portfolio",
    description: "Modern personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    url: "#",
  },
  {
    title: "TIC TAC TOE",
    description: "Backend-powered Tic Tac Toe , anyone can play from anywhere.",
    tech: ["React", "Tailwind", "JS"],
    url: "https://tic-tac-toe-exprt-coder.netlify.app/",
  },
  {
    title: "Birthday Wisher",
    description: "A Dynamic Birthday Wisher Application. Anyone can use it.",
    tech: ["React", "Tailwind", "JS"],
    url: "https://birthday-wisher-exprt-coder.netlify.app/",
  },
  {
    title: "Weather Forecast App",
    description: "Responsive weather forecast app using API integration.",
    tech: ["React", "API", "Tailwind CSS"],
    url: "https://weather-app-exprt-coder.netlify.app/GetStart",
  },
  {
    title: "The CAT",
    description: "Limitless Cat's Facts and Images.",
    tech: ["Node.js", "React", "Tailwind"],
    url: "https://the-cat-exprt-coder.netlify.app/",
  },
 {
  title: "Dream Team Gym App",
  description:
    "A Fitness platform. track progress, fitness knowledge, food & nutrition.",
  tech: ["React", "Tailwind", "JS"],
  url: "https://dream-team-gym.netlify.app",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-start py-20 px-6"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#4a2e00]"
        variants={fadeUp}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-transparent hover:border-[#b46918]/30"
            variants={fadeInScale}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg md:text-xl font-semibold group-hover:text-[#b46918] transition-colors">
                  {proj.title}
                </h3>
                <FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transition-opacity text-[#b46918]" />
              </div>

              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-[#ffeed9] text-[#b46918] px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
