"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/outline";

function Counter({
  from = 0,
  to,
  duration = 0.4,
}: {
  from?: number;
  to: number;
  duration?: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    // Formatta con punto per migliaia (es: 1.000, 25.000)
    return num.toLocaleString("it-IT");
  });

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: [0.4, 0.0, 0.2, 1], // Easing personalizzato più fluido
    });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function CalculatorSection() {
  const [hourlyRate, setHourlyRate] = useState(32);
  const [dailyHours, setDailyHours] = useState(2);
  const [debouncedRate, setDebouncedRate] = useState(32);
  const [debouncedHours, setDebouncedHours] = useState(2);
  const [isDraggingRate, setIsDraggingRate] = useState(false);
  const [isDraggingHours, setIsDraggingHours] = useState(false);

  // Debounce per hourlyRate - ridotto a 100ms per reattività migliore
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedRate(hourlyRate);
    }, 100);
    return () => clearTimeout(timer);
  }, [hourlyRate]);

  // Debounce per dailyHours - ridotto a 100ms per reattività migliore
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedHours(dailyHours);
    }, 100);
    return () => clearTimeout(timer);
  }, [dailyHours]);

  // Calcoli memoizzati con entrambi i valori
  const { dailyEarnings, monthlyEarnings, yearlyEarnings } = useMemo(() => {
    const tariffaOra = debouncedRate;
    const oreGiorno = debouncedHours;

    const daily = tariffaOra * oreGiorno;
    const monthly = tariffaOra * oreGiorno * 5 * 4.33;
    const yearly = tariffaOra * oreGiorno * 5 * 52;

    return {
      dailyEarnings: daily,
      monthlyEarnings: monthly,
      yearlyEarnings: yearly,
    };
  }, [debouncedRate, debouncedHours]);

  return (
    <section id="calcolatore" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-gray-600 font-semibold text-sm">
              CALCOLATORE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Quanto potresti{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A9BE2] via-[#8B4FA3] to-[#E85D3F]">
              guadagnare
            </span>
            ?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
            Imposta la tua tariffa oraria e le ore disponibili per vedere il tuo potenziale
          </p>
        </motion.div>

        {/* Slider Centrato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            {/* Slider 1 - Tariffa Oraria */}
            <div className="mb-8">
              <label className="block text-2xl font-bold mb-6 text-center text-gray-900">
                💰 Quanto vale la tua ora?
              </label>

              <div className="relative mb-6">
                <input
                  type="range"
                  min="20"
                  max="150"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  onMouseDown={() => setIsDraggingRate(true)}
                  onMouseUp={() => setIsDraggingRate(false)}
                  onTouchStart={() => setIsDraggingRate(true)}
                  onTouchEnd={() => setIsDraggingRate(false)}
                  className={`w-full h-4 bg-gradient-to-r from-[#4A9BE2] to-[#8B4FA3] rounded-lg appearance-none transition-all duration-200 slider ${
                    isDraggingRate ? "cursor-grabbing scale-105" : "cursor-grab"
                  }`}
                  style={{
                    background: `linear-gradient(to right, #4A9BE2 0%, #8B4FA3 ${
                      ((hourlyRate - 20) / 130) * 100
                    }%, #E5E7EB ${
                      ((hourlyRate - 20) / 130) * 100
                    }%, #E5E7EB 100%)`,
                    boxShadow: isDraggingRate
                      ? "0 4px 12px rgba(74, 155, 226, 0.4)"
                      : "none",
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-3">
                  <span>€20</span>
                  <span>€150</span>
                </div>
              </div>

              {/* Valore Corrente Tariffa */}
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">
                  €{hourlyRate}/ora
                </div>
              </div>
            </div>

            {/* Separatore */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Slider 2 - Ore Giornaliere */}
            <div>
              <label className="block text-2xl font-bold mb-6 text-center text-gray-900">
                ⏰ Quante ore di consulenze/chiamate fai al giorno?
              </label>

              <div className="relative mb-6">
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={dailyHours}
                  onChange={(e) => setDailyHours(Number(e.target.value))}
                  onMouseDown={() => setIsDraggingHours(true)}
                  onMouseUp={() => setIsDraggingHours(false)}
                  onTouchStart={() => setIsDraggingHours(true)}
                  onTouchEnd={() => setIsDraggingHours(false)}
                  className={`w-full h-4 bg-gradient-to-r from-[#8B4FA3] to-[#E85D3F] rounded-lg appearance-none transition-all duration-200 slider ${
                    isDraggingHours
                      ? "cursor-grabbing scale-105"
                      : "cursor-grab"
                  }`}
                  style={{
                    background: `linear-gradient(to right, #8B4FA3 0%, #E85D3F ${
                      ((dailyHours - 1) / 5) * 100
                    }%, #E5E7EB ${
                      ((dailyHours - 1) / 5) * 100
                    }%, #E5E7EB 100%)`,
                    boxShadow: isDraggingHours
                      ? "0 4px 12px rgba(139, 79, 163, 0.4)"
                      : "none",
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-3">
                  <span>1h</span>
                  <span>6h</span>
                </div>
              </div>

              {/* Valore Corrente Ore */}
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">
                  {dailyHours} ore/giorno
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  Su 5 giorni lavorativi a settimana
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Card Risultati - Orizzontale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto"
        >
          {/* Card Al Giorno */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center h-full flex flex-col justify-center">
            <div className="text-sm text-gray-600 mb-3">Al Giorno</div>
            <div className="text-4xl font-bold text-gray-900">
              €<Counter to={Math.round(dailyEarnings)} />
            </div>
          </div>

          {/* Card Al Mese */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center h-full flex flex-col justify-center">
            <div className="text-sm text-gray-600 mb-3">Al Mese</div>
            <div className="text-4xl font-bold text-gray-900">
              €<Counter to={Math.round(monthlyEarnings)} />
            </div>
          </div>

          {/* Card ALL'ANNO - HERO */}
          <motion.div
            animate={{
              boxShadow: [
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-br from-[#4A9BE2] via-[#8B4FA3] to-[#E85D3F] p-8 rounded-2xl shadow-2xl text-center relative overflow-hidden h-full flex flex-col justify-center"
          >
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChartBarIcon className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            <div className="text-sm text-white/90 mb-3">⭐ ALL&apos;ANNO</div>
            <div className="text-4xl font-bold text-white">
              €<Counter to={Math.round(yearlyEarnings)} />
            </div>
          </motion.div>
        </motion.div>

        {/* Box Messaggio Finale - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#E85D3F]/20 via-[#8B4FA3]/20 to-[#4A9BE2]/20 p-12 rounded-3xl shadow-xl mb-12"
        >
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Stai perdendo €<Counter to={Math.round(yearlyEarnings)} />{" "}
              all&apos;anno rispondendo gratis.
            </p>
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
              Con Payphone, ogni chiamata diventa guadagno immediato.
              <br />
              Non cambi nulla del tuo lavoro. Solo inizi a essere pagato.
            </p>
          </div>
        </motion.div>

        {/* CTA Button Grande - Centrato */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="#footer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#4A9BE2] via-[#8B4FA3] to-[#E85D3F] text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Scarica l&apos;App Gratuitamente
            <motion.div
              whileHover={{ y: [0, 4, 0] }}
              transition={{ duration: 0.4, repeat: 2, ease: "easeInOut" }}
            >
              <ArrowDownTrayIcon className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
