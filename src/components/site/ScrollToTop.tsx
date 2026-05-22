import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Gentle continuous wiggle — professional, not cartoonish
const wiggleAnimation = {
  animate: {
    y: [0, -5, 0, -3, 0],
    rotate: [0, -3, 0, 3, 0],
  },
  transition: {
    duration: 2.8,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut",
  },
};

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past ~1 screen height (into the 2nd section)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.7, y: 24 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: wiggleAnimation.animate.y,
            rotate: wiggleAnimation.animate.rotate,
          }}
          exit={{ opacity: 0, scale: 0.7, y: 24 }}
          transition={{
            opacity: { duration: 0.35 },
            scale: { duration: 0.35, ease: [0.2, 0.7, 0.2, 1] },
            y: {
              duration: 2.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.4,
            },
            rotate: {
              duration: 2.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.4,
            },
          }}
          onClick={handleClick}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-sm"
          style={{
            background: "radial-gradient(circle, oklch(0.28 0.04 50), oklch(0.18 0.02 40))",
            border: "1px solid oklch(0.78 0.13 78 / 0.55)",
            boxShadow: "0 8px 32px oklch(0.78 0.13 78 / 0.3), 0 2px 8px oklch(0 0 0 / 0.4)",
          }}
          whileHover={{
            boxShadow: "0 12px 40px oklch(0.78 0.13 78 / 0.5), 0 2px 8px oklch(0 0 0 / 0.4)",
            scale: 1.1,
          }}
          whileTap={{ scale: 0.92 }}
        >
          {/* Gold top accent line */}
          <span
            className="absolute top-0 left-1/2 h-px w-7 -translate-x-1/2 rounded-full"
            style={{ background: "oklch(0.78 0.13 78 / 0.9)" }}
          />
          {/* Up chevron */}
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-gold"
          >
            <path d="M4 13l6-6 6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
