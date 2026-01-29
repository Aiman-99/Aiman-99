"use client";

import { motion } from "framer-motion";

const petals = Array.from({ length: 12 });

export default function FloatingPetals({ z = 0 }: { z?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: z }}
    >
      {petals.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 bg-yellow-300 rounded-full opacity-40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -50,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: "110vh",
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
