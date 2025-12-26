"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="flex items-center justify-center min-h-screen bg-[#F5DEB3] px-4 sm:px-8"
    >
      {/* Content Frame */}
      <div className="relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">

        {/* Inside background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/flowers/bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16">
          {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif mb-4 text-rose-700"
        >
          Majlis 
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-serif mb-4 text-rose-700"
        >
          Pertunangan
        </motion.h1>

        {/* Names */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-3xl md:text-5xl font-serif mb-2 text-rose-800"
        >
          Rushamilla
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-3xl md:text-5xl font-serif mb-2 text-rose-800"
        >
          &
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-3xl md:text-5xl font-serif mb-6 text-rose-800"
        >
          Aiman
        </motion.h2>

        <p className="text-lg mb-2 text-black">📅 23 Mac 2026</p>

        <a
          href="https://maps.app.goo.gl/Xcu3Y3cVvR2J3stt7"
          target="_blank"
          className="text-blue-600 underline mb-8"
        >
          📍 Lokasi Majlis (Bandar Bukit Mahkota, Bangi)
        </a>

        <a
          href="#rsvp"
          className="px-6 py-3 bg-rose-500 text-white rounded-full shadow hover:bg-rose-600 transition"
        >
          RSVP Sekarang
         </a>
        </div>
      </div>
    </section>
  );
}
