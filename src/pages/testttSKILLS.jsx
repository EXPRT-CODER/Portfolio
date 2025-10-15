import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiFigma } from "react-icons/si";

export default function Skills() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const skills = [
    { icon: <FaReact />, id: "react" },
    { icon: <SiTailwindcss />, id: "tailwind" },
    { icon: <SiJavascript />, id: "js" },
    { icon: <FaNodeJs />, id: "node" },
    { icon: <SiMongodb />, id: "mongo" },
    { icon: <FaGitAlt />, id: "git" },
    { icon: <SiFigma />, id: "figma" },
  ];

  const iconRefs = useRef([]);
  const [dragging, setDragging] = useState(false);

  // Draw connecting lines
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(123, 74, 18, 0.25)";
      ctx.lineWidth = 1;

      const positions = iconRefs.current.map((ref) => {
        if (!ref?.current) return null;
        const r = ref.current.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - rect.left,
          y: r.top + r.height / 2 - rect.top,
        };
      });

      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          const p1 = positions[i];
          const p2 = positions[j];
          if (!p1 || !p2) continue;
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 350) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Floating animation
  const floatAnim = (delay = 0) => ({
    y: [0, -10, 5, -5, 0],
    x: [0, 5, -5, 3, 0],
    transition: {
      duration: 6 + Math.random() * 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay,
    },
  });

  // Circle positions in %
  const circlePositions = (count, radius = 30) => {
    const centerX = 50;
    const centerY = 50;
    const angleStep = (2 * Math.PI) / count;
    return Array.from({ length: count }, (_, i) => ({
      left: `${centerX + radius * Math.cos(i * angleStep)}%`,
      top: `${centerY + radius * Math.sin(i * angleStep)}%`,
    }));
  };

  const initialPositions = circlePositions(skills.length, 25);

  // Auto-circle when not dragging
  useEffect(() => {
    if (dragging) return;
    initialPositions.forEach((pos, i) => {
      if (!iconRefs.current[i]?.current) return;
      animate(
        iconRefs.current[i].current,
        { left: pos.left, top: pos.top },
        { duration: 1.5 }
      );
    });
  }, [dragging]);

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#fff7ef] to-[#f5d8b5] text-[#3e2b10] overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-10 z-10">My Skills</h2>

      <div
        ref={containerRef}
        className="relative w-[80vw] h-[70vh] flex items-center justify-center"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {skills.map((skill, i) => {
          iconRefs.current[i] = iconRefs.current[i] || { current: null };
          return (
            <motion.div
              key={i}
              ref={(el) => (iconRefs.current[i].current = el)}
              initial={{
                left: initialPositions[i].left,
                top: initialPositions[i].top,
              }}
              animate={floatAnim(i * 0.5)}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              whileHover={{ scale: 1.4 }}
              onDragStart={() => setDragging(true)}
              onDragEnd={() => setDragging(false)}
              style={{
                position: "absolute",
                cursor: "grab",
              }}
              className="text-5xl bg-white/80 backdrop-blur-md shadow-lg rounded-full p-6 text-[#7b4a12] transition-transform"
            >
              {skill.icon}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
