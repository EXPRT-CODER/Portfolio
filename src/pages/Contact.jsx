import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(""); // ✅ to show feedback message

  const check = (val) => {
    if (val.toLowerCase() === "anshika") setShow(true);
    else setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xpwyydwv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center pt-20 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        Get in <span className="text-[#b46918]">Touch</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-700 text-center mb-10 max-w-md"
      >
        Feel free to reach out for collaborations, projects, or just say hi 👋  
        I’ll get back to you as soon as possible!
      </motion.p>

      {/* ✅ Now using handleSubmit */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-lg flex flex-col gap-5 border border-[#b46918]/20"
      >
        <div className="relative">
          <FaUser className="absolute left-4 top-3 text-[#b46918]" />
          <input
            onChange={(e) => check(e.target.value)}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b46918] transition-all"
          />
        </div>

        {show && <p className="text-[rgb(109,67,0)]">Ohh it's you, Dear...</p>}

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-3 text-[#b46918]" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b46918] transition-all"
          />
        </div>

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#b46918] transition-all resize-none"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-[#b46918] text-white font-semibold py-2 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-[#d47b1e] transition-all shadow-md"
        >
          {status === "loading" ? "Sending..." : <><FaPaperPlane /> Send Message</>}
        </motion.button>

        {/* ✅ Feedback message */}
        {status === "success" && (
          <p className="text-green-600 text-center mt-3">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-3">
            ❌ Oops! Something went wrong. Try again later.
          </p>
        )}
      </motion.form>

      <div className="mt-10 text-gray-600 text-sm text-center">
        Or drop a mail directly at{" "}
        <a
          href="mailto:vishal67596759@gmail.com"
          className="text-[#b46918] font-medium hover:underline"
        >
          vishal67596759@gmail.com
        </a>
      </div>
    </section>
  );
}
