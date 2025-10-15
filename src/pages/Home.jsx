import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, fadeInScale } from "../animations/variants"; // 👈 import from your file

const Home = () => {
  return (
    <motion.section
      id="home"
      className="h-screen pt-10 flex flex-col md:flex-row items-center justify-center"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Image */}
      <motion.div
        className="flex-1/2 h-full flex justify-center items-center"
        variants={fadeInScale}
      >
        <img src="/Home.png" alt="image" className="w-[90%] mt-60 md:mt-20" />
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex-1/2 h-full flex flex-col justify-center items-start gap-4 pl-10 md:pl-25"
        variants={containerStagger}
      >
        {/* Headings */}
        <motion.h1
          className="text-[3rem] font-bold leading-tight"
          variants={fadeUp}
        >
          Hey I'm{" "}
          <span className="text-[rgb(109,67,0)] drop-shadow-[0_0_10px_rgb(109,67,0)]">
            Vishal
          </span>
        </motion.h1>

        <motion.h2
          className="text-[2.3rem] font-semibold leading-tight"
          variants={fadeUp}
        >
          I'm a{" "}
          <span className="text-[rgb(109,67,0)] drop-shadow-[0_0_10px_rgb(109,67,0)]">
            Developer
          </span>
        </motion.h2>

        <motion.p
          className="text-[1rem] text-gray-700 max-w-lg"
          variants={fadeUp}
        >
          I’m a passionate coder who loves solving problems and creating
          impactful projects. Skilled in front-end and back-end development, I
          focus on clean, scalable solutions while continuously learning new
          technologies to build user-friendly applications.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-2 md:gap-5 text-2xl"
          variants={fadeUp}
        >
          {[
            { icon: <FaGithub />, link: "https://github.com/EXPRT-CODER" },
            { icon: <FaFacebook />, link: "#" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/vishal-prajapati-63213638a",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/vishal.xtt/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="w-12 h-12 flex items-center justify-center rounded-full border-3 border-[rgb(109,67,0)] text-[rgb(109,67,0)] hover:bg-[rgb(109,67,0)] hover:text-white transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

        {/* Button */}
        <motion.button
          className="font-bold w-[230px] h-[40px] flex items-center justify-center mt-3 ml-0 md:ml-3 bg-[rgb(109,67,0)] text-white px-6 py-3 rounded-sm shadow-md hover:bg-[rgb(90,55,0)] hover:scale-105 transition-transform duration-300"
          variants={fadeInScale}
        >
          Download CV
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Home;
