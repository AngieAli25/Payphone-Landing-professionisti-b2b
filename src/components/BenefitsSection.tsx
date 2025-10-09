"use client";

import { motion } from "framer-motion";
import {
  BoltIcon,
  ReceiptPercentIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: BoltIcon,
      title: "Pagamento Immediato",
      description:
        "Non aspetti fatture, bonifici o solleciti. Il cliente paga prima della chiamata. Tu rispondi e il denaro è già tuo.",
    },
    {
      icon: ReceiptPercentIcon,
      title: "Zero Commissioni",
      description:
        "Tutto quello che guadagni resta a te. Nessuna percentuale trattenuta. Nessun costo nascosto.",
    },
    {
      icon: ClockIcon,
      title: "Controllo Totale dei Tuoi Orari",
      description:
        "Blocchi gli orari quando non vuoi essere disturbato. Lavori quando decidi tu. Nessuna pressione.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Privacy e Sicurezza Garantite",
      description:
        "Non condividi mai il tuo numero personale. Pagamenti certificati Stripe. I tuoi dati sono protetti.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-600 font-semibold text-sm">I VANTAGGI</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            Perché Oltre{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              1.000 Professionisti
            </span>
            <br />
            Hanno Scelto Payphone
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
