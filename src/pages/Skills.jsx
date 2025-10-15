import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaFigma,
  FaGithub,
  FaBootstrap,
  FaJava,
  FaWordpress,
  FaPhp,
} from "react-icons/fa";
import { containerStagger, fadeUp, fadeInScale } from "../animations/variants";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: "Expert" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJsSquare />, level: "Advanced" },
    { name: "React", icon: <FaReact />, level: "Advanced" },
    { name: "Node.js", icon: <FaNodeJs />, level: "Intermediate" },
    { name: "Python", icon: <FaPython />, level: "Intermediate" },
    { name: "Git", icon: <FaGitAlt />, level: "Advanced" },
    { name: "GitHub", icon: <FaGithub />, level: "Advanced" },
    { name: "Database", icon: <FaDatabase />, level: "Intermediate" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: "Advanced" },
    { name: "Java", icon: <FaJava />, level: "Intermediate" },
    { name: "PHP", icon: <FaPhp />, level: "Intermediate" },
    { name: "WordPress", icon: <FaWordpress />, level: "Intermediate" },
    { name: "Figma", icon: <FaFigma />, level: "Intermediate" },
  ];

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col items-center py-20 px-6"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-[#4a2e00] mb-12 drop-shadow-md text-center"
        variants={fadeUp}
      >
        My Skills
      </motion.h1>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-[150px] h-[130px] bg-[#fff8ef] border border-[#d8b277] rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            variants={fadeInScale}
          >
            <div className="text-[#9c6b18] text-4xl mb-2">{skill.icon}</div>
            <h2 className="text-base font-semibold text-[#4a2e00]">{skill.name}</h2>
            <p className="text-xs text-[#775a27]">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
