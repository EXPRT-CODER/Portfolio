import React from "react";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, fadeInScale } from "../animations/variants";

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-[80vh] flex flex-col items-center justify-center gap-10 px-8 py-20 mt-20 md:mt-0"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* About Text */}
      <motion.div
        className="w-full mb-10 md:w-1/2 text-[#3e2b10]"
        variants={fadeInScale}
      >
        <motion.h2
          className="text-4xl font-bold mb-10 w-full text-center"
          variants={fadeUp}
        >
          About Me
        </motion.h2>

        <motion.p className="text-lg leading-relaxed mb-6" variants={fadeUp}>
          Hi, I'm{" "}
          <span className="font-semibold text-[#7b4a12]">Vishal</span> — a
          passionate developer who loves building beautiful, functional, and
          scalable web applications. I enjoy transforming ideas into digital
          experiences using modern front-end and back-end technologies.
        </motion.p>

        <motion.p className="text-lg leading-relaxed mb-6" variants={fadeUp}>
          When I’m not coding, I love exploring UI trends, experimenting with
          animations, and constantly learning new tools to improve my craft.
        </motion.p>

        <motion.div className="flex gap-5" variants={fadeUp}>
          <button 
            onClick={() => window.location.href = "#contact"}
            className="bg-[#7b4a12] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#5a3e1b] transition">
            Contact Me
          </button>
          <button className="border-2 border-[#7b4a12] text-[#7b4a12] px-6 py-2 rounded-full hover:bg-[#7b4a12] hover:text-white transition">
            View Resume
          </button>
        </motion.div>
      </motion.div>

      {/* Beyond the Code */}
      <motion.div variants={fadeInScale}>
        <motion.h3
          className="text-3xl font-bold text-[#3e2b10] mb-8"
          variants={fadeUp}
        >
          Beyond the Code
        </motion.h3>
        <motion.p
          className="max-w-3xl mx-auto text-[#3e2b10]/80 text-lg leading-relaxed"
          variants={fadeUp}
        >
          When I’m not coding, I enjoy exploring new technology trends, playing
          video games like GTA V , Minecraft and mainly BGMI , if you want to play with me then this is my UID: 5763230354 
          send request and i will play with you. and also i love designing creative UI concepts, and going to the gym.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
