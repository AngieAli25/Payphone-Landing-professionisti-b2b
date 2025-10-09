"use client";

import { motion } from "framer-motion";
import {
  PhoneIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

export default function ProblemSection() {
  const scenarios = [
    {
      icon: PhoneIcon,
      title: "Chiamate infinite senza guadagno",
      text: "Quante volte hai dato consigli gratis 'solo 5 minuti' che sono diventati 30? Il tuo tempo vale, non regalarlo.",
    },
    {
      icon: CalendarIcon,
      title: "Clienti occasionali che non tornano",
      text: "Prime chiamate esplorative che non si trasformano mai in clienti paganti. Monetizza fin dal primo contatto.",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Opportunità che sfuggono",
      text: "Ogni giorno centinaia di persone cercano la tua expertise e sono disposte a pagare. Ma non ti trovano.",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <div className="inline-block px-3.5 py-1.5 bg-gray-100 rounded-full">
            <span className="text-gray-600 font-semibold text-xs">
              IL PROBLEMA
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-5 text-gray-900 leading-tight text-center"
        >
          Quanto tempo hai regalato oggi?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto text-center mb-12"
        >
          Ogni giorno rispondi gratis a domande che potrebbero diventare guadagno
        </motion.p>

        {/* Grid 3 Card Scenari */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                borderColor: "transparent",
              }}
              className="bg-white p-6 rounded-2xl shadow-md border-2 border-gray-200 cursor-pointer transition-all duration-300 ease-out relative overflow-hidden group"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{
                     background: 'linear-gradient(to right, #4A9BE2, #8B4FA3, #E85D3F)',
                     padding: '2px',
                     WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     WebkitMaskComposite: 'xor',
                     maskComposite: 'exclude',
                   }}
              />

              {/* Icona */}
              <motion.div
                className="mb-5"
                whileHover={{
                  scale: 1.1,
                  y: [0, -8, 0, -4, 0],
                }}
                transition={{ duration: 0.4 }}
              >
                <scenario.icon className="w-10 h-10 text-[#8B4FA3]" />
              </motion.div>

              {/* Titolo */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {scenario.title}
              </h3>

              {/* Testo */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {scenario.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Box Gradient Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="bg-gradient-to-br from-[#4A9BE2] via-[#8B4FA3] to-[#E85D3F] py-10 px-7 rounded-3xl shadow-2xl text-center max-w-5xl mx-auto">
            <p className="text-2xl font-bold text-white mb-2 leading-tight">
              Il problema non è il tuo lavoro
            </p>
            <p className="text-2xl font-bold text-white mb-7 leading-tight">
              È che non hai un sistema per farti pagare
            </p>

            {/* CTA Button */}
            <motion.a
              href="#footer"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-black font-bold text-base px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Scarica l'App Gratuitamente
              <ArrowDownTrayIcon className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
