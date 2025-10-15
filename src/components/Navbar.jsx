import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About","Profession", "Skills", "Projects"];

  return (
    <nav className="w-full fixed top-0  bg-white/10 backdrop-blur-xs z-999">
      <div className="max-w-7xl mx-auto h-[10vh] flex justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <h1 className="text-[2rem] font-extrabold">
          <span className="text-[rgb(109,67,0)] drop-shadow-[0_0_10px_rgb(109,67,0)]">
            Vishal
          </span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-[1.2rem] font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-black transition-colors duration-300 hover:text-[rgb(109,67,0)]
              before:content-[''] before:absolute before:left-0 before:-bottom-[3px]
              before:h-[3px] before:w-0 before:bg-[rgb(109,67,0)] before:transition-all before:duration-200
              hover:before:w-full"
            >
              {link}
            </a>
          ))}

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-5 py-1.5 rounded-full border-2 border-[rgb(109,67,0)] text-black transition-all duration-300 hover:bg-[rgb(109,67,0)] hover:text-white"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gradient-to-r drop-shadow-[0_0_20px_rgb(109,67,0)] shadow-md pb-4 px-4 space-y-4 text-center text-[1.2rem] font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-black hover:text-[rgb(109,67,0)] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-5 py-2 rounded-full border-2 border-[rgb(109,67,0)] text-black hover:bg-[rgb(109,67,0)] hover:text-white transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
