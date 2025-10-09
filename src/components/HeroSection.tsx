"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  PlayCircleIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#4A9BE2] via-[#8B4FA3] to-[#E85D3F] relative overflow-hidden px-5 md:px-10 lg:px-20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#4A9BE2]/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#D94A8C]/25 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#8B4FA3]/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* COLONNA SINISTRA - COPY */}
          <div className="space-y-5">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[1.73rem] md:text-[2.59rem] lg:text-[3.02rem] font-semibold text-white"
              style={{ lineHeight: '1.1' }}
            >
              Sei un professionista?
              <br />
              Smetti di{" "}
              <span className="font-bold">
                regalare
              </span>
              <br />
              il tuo tempo
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[0.87rem] md:text-[0.96rem] lg:text-[1.15rem] font-normal leading-relaxed text-white/90 max-w-2xl"
            >
              Monetizza ogni chiamata con pagamento immediato.
              <br />
              Zero commissioni. Controllo totale su orari e tariffe.
            </motion.p>

            {/* Chiusura */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[0.77rem] md:text-[0.87rem] font-medium text-white/80"
            >
              Ogni chiamata diventa guadagno
            </motion.p>

            {/* CTA Buttons - App Store */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-3 flex-wrap mt-6 mb-5"
            >
              {/* App Store Button */}
              <motion.a
                href="https://apps.apple.com/it/app/online-payphone/id6738121965"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "13px 26px",
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: "12.2px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  boxShadow: "0 3px 16px rgba(0, 0, 0, 0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 24px rgba(0, 0, 0, 0.25)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.boxShadow =
                    "0 3px 16px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                }}
              >
                {/* Apple Icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div style={{ fontSize: "8.4px", opacity: 0.9 }}>
                    Scarica su
                  </div>
                  <div style={{ fontSize: "12.2px", fontWeight: 700 }}>
                    App Store
                  </div>
                </div>
              </motion.a>

              {/* Google Play Button */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.onlinephonepay.app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "13px 26px",
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: "12.2px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  boxShadow: "0 3px 16px rgba(0, 0, 0, 0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 24px rgba(0, 0, 0, 0.25)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.boxShadow =
                    "0 3px 16px rgba(0, 0, 0, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                }}
              >
                {/* Google Play Icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div>
                  <div style={{ fontSize: "8.4px", opacity: 0.9 }}>
                    Scarica su
                  </div>
                  <div style={{ fontSize: "12.2px", fontWeight: 700 }}>
                    Google Play
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Microcopy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap items-center gap-3 text-[0.67rem] text-white/70 pt-2"
            >
              <span className="flex items-center gap-1">
                <CheckCircleIcon className="w-3.5 h-3.5 text-green-400" />
                100% Gratis
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircleIcon className="w-3.5 h-3.5 text-green-400" />
                Oltre 1.000 professionisti attivi
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircleIcon className="w-3.5 h-3.5 text-green-400" />
                Attiva in 30 minuti
              </span>
            </motion.div>
          </div>

          {/* COLONNA DESTRA - VIDEO MOCKUP */}
          <div className="relative w-full max-w-[193px] sm:max-w-[221px] lg:max-w-[248px] mx-auto">
            <motion.div
              className="relative aspect-[9/19.5] rounded-[3rem] border-[14px] border-black shadow-2xl shadow-black/50 overflow-hidden bg-black"
              style={{ y }}
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 0,
                y: [0, -20, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                opacity: { duration: 1, delay: 0.5, ease: "easeOut" },
                x: { duration: 1, delay: 0.5, ease: "easeOut" },
                rotate: { duration: 1, delay: 0.5, ease: "easeOut" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {/* Video */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
                playsInline
                autoPlay
                muted
                loop
              >
                <source src="/payphone-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
