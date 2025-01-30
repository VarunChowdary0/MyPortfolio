import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollDrop: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-item");
      elements.forEach((el, index) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          setVisibleSections((prev) => Array.from(new Set([...prev, index])));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  
  return (
    <div className="flex items-center gap-10 p-10 h-[300vh]">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="scroll-item w-64 h-32 bg-blue-500 text-white flex justify-center items-center text-xl rounded-2xl shadow-lg"
          initial={{ x: 200, opacity: 0, scale: 0.8 }}
          animate={visibleSections.includes(index) ? { x: 0, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: visibleSections.includes(index) ? index * 0.2 : 0 }}
        >
          Box {index + 1}
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollDrop;