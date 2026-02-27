"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FloatingPetals from "@/components/FloatingPetals";
import Countdown from "@/components/Countdown";

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 🎶 Auto-play music on first user interaction (mobile-safe)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
        setHasInteracted(true);
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Animation variants - Fixed TypeScript typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as any,
      },
    },
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9] as any,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as any,
      },
    },
  };

  if (!isMounted) return null;

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-12 overflow-hidden"
      style={{
        backgroundImage: "url('/flowers/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🌸 Floating petals */}
      <FloatingPetals />

      {/* Gradient overlay for depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/10 via-transparent to-transparent" />

      {/* 🖼️ MAIN HERO CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.6, 0.05, 0.01, 0.9] as any }}
        className="relative z-10 w-full max-w-4xl mb-12"
      >
        {/* Decorative corner elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-3xl opacity-60" />
        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-3xl opacity-60" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-3xl opacity-60" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#D4AF37] rounded-br-3xl opacity-60" />

        {/* Card content */}
        <div className="rounded-3xl shadow-2xl border-2 border-[#D4AF37]/40 bg-white/40 backdrop-blur-xl overflow-hidden relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjZCMkUiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDI0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00ek0xMiAyOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMjQgMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMjQgMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center text-center px-6 sm:px-12 py-16 sm:py-20 relative"
          >
            {/* Decorative divider top */}
            <motion.div
              variants={itemVariants}
              className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8"
            />

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl mb-6 text-[#8B6B2E] tracking-[0.2em] font-light uppercase"
              style={{
                textShadow: "0 2px 20px rgba(212,175,55,0.3)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              Majlis Pertunangan
            </motion.h1>

            {/* Decorative element */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <div className="w-2 h-2 bg-[#D4AF37] rotate-45" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </motion.div>

            {/* First Name */}
            <motion.h2
              variants={nameVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-3 tracking-wide relative"
              style={{
                fontFamily: "var(--font-pinyon)",
                background: "linear-gradient(135deg, #8B6B2E 0%, #D4AF37 50%, #8B6B2E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 4px 12px rgba(212,175,55,0.4))",
              }}
            >
              Rushamilla
            </motion.h2>

            {/* Ampersand with flourish */}
            <motion.div
              variants={itemVariants}
              className="my-6 flex flex-col items-center"
            >
              <div className="text-5xl md:text-6xl text-[#D4AF37] opacity-80" style={{ fontFamily: "var(--font-pinyon)" }}>
                &
              </div>
              <div className="mt-2 flex gap-2">
                <div className="w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-75" />
                <div className="w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-150" />
              </div>
            </motion.div>

            {/* Second Name */}
            <motion.h2
              variants={nameVariants}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 tracking-wide"
              style={{
                fontFamily: "var(--font-pinyon)",
                background: "linear-gradient(135deg, #8B6B2E 0%, #D4AF37 50%, #8B6B2E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 4px 12px rgba(212,175,55,0.4))",
              }}
            >
              Aiman
            </motion.h2>

            {/* Decorative divider */}
            <motion.div
              variants={itemVariants}
              className="w-48 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8"
            />

            {/* Date & Location */}
            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              <p className="text-lg sm:text-xl text-[#5A4A2A] font-medium flex items-center justify-center gap-2">
                <span className="text-2xl">📅</span>
                <span>23 Mac 2026</span>
              </p>
              {/* <p className="text-lg sm:text-xl text-[#5A4A2A] font-medium flex items-center justify-center gap-2">
                <span className="text-2xl">📍</span>
                <span>Bandar Bukit Mahkota, Selangor</span>
              </p> */}
            </motion.div>

            {/* Countdown */}
            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              <Countdown />
            </motion.div>

            {/* Location Button */}
            {/* <motion.a
              variants={itemVariants}
              href="https://maps.app.goo.gl/Xcu3Y3cVvR2J3stt7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139,107,46,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-[#8B6B2E] to-[#6B5223] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-medium text-lg flex items-center gap-2 group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">📍</span>
              <span>Lokasi Majlis</span>
            </motion.a> */}

            {/* RSVP Button */}
            <motion.a
              variants={itemVariants}
              href="#rsvp"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139,107,46,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-[#8B6B2E] to-[#6B5223] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-medium text-lg flex items-center gap-2 group cursor-pointer"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">💌</span>
              <span>KEHADIRAN</span>
            </motion.a>
            {/* Decorative divider bottom */}

            <motion.div
              variants={itemVariants}
              className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-8"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 📋 ITINERARY SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative z-10 w-full max-w-4xl mb-12"
      >
        <div className="rounded-3xl shadow-2xl border-2 border-[#D4AF37]/40 bg-white/90 backdrop-blur-xl overflow-hidden">
          <div className="px-6 sm:px-12 py-12 sm:py-16">
            {/* Section Title */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#8B6B2E] mb-3" style={{ fontFamily: "var(--font-geist-mono)" }}>
                ATURCARA MAJLIS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
            </div>

            {/* Timeline */}
            <div className="max-w-xl mx-auto space-y-6">
              {[
                { time: "11:00 AM", event: "Kehadiran Tetamu" },
                { time: "12:00 PM", event: "Majlis Bermula" },
                { time: "1:30 PM", event: "Jamuan Makan" },
                { time: "4:00 PM", event: "Majlis Bersurai" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between border-b-2 border-[#D4AF37]/30 pb-4 group hover:border-[#D4AF37] transition-colors"
                >
                  <span className="text-lg sm:text-xl font-semibold text-[#8B6B2E] group-hover:text-[#D4AF37] transition-colors">
                    {item.time}
                  </span>
                  <span className="text-lg sm:text-xl font-medium text-[#5A4A2A]">
                    {item.event}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-center mt-10 space-y-3 text-[#5A4A2A]">
              {/* <div className="flex items-center justify-center gap-2">
                <span className="text-xl">👔</span>
                <p className="text-base sm:text-lg">
                  <span className="font-semibold">Dress Code:</span> Green (Pihak Lelaki)
                </p>
              </div> */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">📞</span>
                <p className="text-base sm:text-lg">
                  <span className="font-semibold">Hubungi:</span> Aiman (017-5448767) atau Rushamilla (010-4374886)
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 💌 RSVP SECTION */}
      <motion.div
        id="rsvp"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative z-10 w-full max-w-4xl mb-12"
      >
        <div className="rounded-3xl shadow-2xl border-2 border-[#D4AF37]/40 bg-white/90 backdrop-blur-xl overflow-hidden">
          <div className="px-6 sm:px-12 py-12 sm:py-16 flex flex-col items-center text-center">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-[#8B6B2E] mb-6" style={{ fontFamily: "var(--font-geist-mono)" }}>
              RSVP
            </h2>

            {/* Decorative divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />

            {/* Instruction Text */}
            <p className="mb-8 max-w-md text-[#5A4A2A] text-base sm:text-lg leading-relaxed">
              Sila sahkan kehadiran anda sebelum <span className="font-semibold text-[#8B6B2E]">16 Mac 2026</span>. Terima kasih!
            </p>

            {/* Google Form Button */}
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <motion.a
                href="https://forms.gle/4LEohL7hdnmAo9qY9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16,185,129,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-medium text-lg flex items-center gap-2 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">📝</span>
                <span>Kehadiran Pihak Lelaki</span>
              </motion.a>

              <motion.a
                href="https://forms.gle/SZEpimYrvWTq6er18"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16,185,129,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-medium text-lg flex items-center gap-2 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">📝</span>
                <span>Kehadiran Pihak Perempuan</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 🎵 AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/munifhijjaz.mp3" type="audio/mpeg" />
      </audio>

      {/* 🔊 MUSIC BUTTON */}
      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, duration: 0.6, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#8B6B2E] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-2xl backdrop-blur-sm border-2 border-white/30"
        aria-label="Toggle background music"
      >
        <motion.span
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
        >
          {isPlaying ? "🔊" : "🔈"}
        </motion.span>
      </motion.button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-75 {
          animation-delay: 0.15s;
        }
        .delay-150 {
          animation-delay: 0.3s;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}