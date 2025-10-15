import React from "react";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, fadeInScale } from "../animations/variants";

const WhatiDo = () => {
  const services = [
    { 
      title: 'Front-End Development', 
      desc: 'I craft clean, responsive, and visually appealing interfaces using React and Tailwind CSS.' 
    },
    { 
      title: 'C/C++ Development', 
      desc: 'I build efficient and scalable C++ Programs and Apps ensuring smooth functionality.' 
    },
    { 
      title: 'UI/UX Design', 
      desc: 'I blend aesthetics and usability to create intuitive designs that enhance user experience.' 
    }
  ];

  return (
    <motion.section
      id="profession"
      className="py-20 px-8"
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h3
        className="text-3xl font-bold text-center text-[#4a2e00] mb-12"
        variants={fadeUp}
      >
        What I Do
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md p-6 rounded-2xl hover:-translate-y-2 transition"
            variants={fadeInScale}
          >
            <h4 className="text-xl font-semibold text-[#7b4a12] mb-3">{item.title}</h4>
            <p className="text-[#3e2b10]/80">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatiDo;
