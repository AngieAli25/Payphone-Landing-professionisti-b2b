"use client";

import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Avv. Marco Rossi",
      profession: "Avvocato Tributarista",
      quote:
        "Ho guadagnato €2.847 il primo mese rispondendo a chiamate nei tempi morti tra un'udienza e l'altra",
      rating: 5,
    },
    {
      name: "Dott.ssa Elena Martini",
      profession: "Psicologa Clinica",
      quote:
        "€3.200 al mese di guadagno extra senza aggiungere un solo appuntamento in studio. Rispondo durante le pause pranzo",
      rating: 5,
    },
    {
      name: "Giuseppe Ferrara",
      profession: "Consulente Finanziario",
      quote:
        "Prima regalavo 10 ore a settimana in consulenze gratuite. Ora monetizzo ogni minuto. €4.500 il primo mese",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Già Oltre 1.000 Professionisti
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A9BE2] via-[#8B4FA3] to-[#E85D3F]">
              Guadagnano con Payphone
            </span>
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4A9BE2] via-[#8B4FA3] to-[#E85D3F] rounded-full flex items-center justify-center mb-4">
                  <UserCircleIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {testimonial.profession}
                </p>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-lg leading-relaxed">
                <span className="text-4xl text-[#8B4FA3] leading-none">"</span>
                {testimonial.quote}
                <span className="text-4xl text-[#8B4FA3] leading-none">"</span>
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg w-[320px] flex-shrink-0"
              >
                {/* Avatar */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4A9BE2] via-[#8B4FA3] to-[#E85D3F] rounded-full flex items-center justify-center mb-3">
                    <UserCircleIcon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="font-bold text-base text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {testimonial.profession}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-base leading-relaxed">
                  <span className="text-3xl text-[#8B4FA3] leading-none">"</span>
                  {testimonial.quote}
                  <span className="text-3xl text-[#8B4FA3] leading-none">"</span>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
