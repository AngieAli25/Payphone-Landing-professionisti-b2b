"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  UserGroupIcon,
  CurrencyEuroIcon,
  ClockIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function Counter({
  from = 0,
  to,
  duration = 2,
}: {
  from?: number;
  to: number;
  duration?: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString();
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  return <span ref={ref}>{from.toLocaleString()}</span>;
}

export default function StatsSection() {
  const stats = [
    {
      icon: UserGroupIcon,
      number: 1000,
      suffix: "+",
      label: "Professionisti Attivi",
      description: "Guadagnano ogni giorno",
    },
    {
      icon: CurrencyEuroIcon,
      number: 250000,
      prefix: "€",
      suffix: "+",
      label: "Pagamenti Processati",
      description: "Ogni mese sulla piattaforma",
    },
    {
      icon: ClockIcon,
      number: 30,
      label: "Minuti di Setup",
      description: "Per iniziare a guadagnare",
    },
    {
      icon: CheckBadgeIcon,
      number: 100,
      suffix: "%",
      label: "Guadagno Netto",
      description: "Zero commissioni trattenute",
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white"></div>

      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-4">
            <span className="text-purple-600 font-semibold text-sm">
              NUMERI CHE PARLANO
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
            La Community{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Payphone
            </span>
            <br />
            in Numeri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Migliaia di professionisti hanno già trasformato il loro tempo in
            guadagno.
            <br className="hidden md:block" />I risultati parlano da soli.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>

              <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="mb-3">
                  <div className="text-5xl font-extrabold text-gray-900 mb-1">
                    {stat.prefix}
                    <Counter to={stat.number} duration={2.5} />
                    {stat.suffix}
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              Unisciti ai professionisti che hanno smesso di lavorare gratis
            </p>
            <p className="text-gray-600 mb-6">
              Ogni giorno nuovi professionisti iniziano a monetizzare il loro
              tempo
            </p>
            <motion.a
              href="#footer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Scarica l'App Gratuitamente</span>
              <ArrowDownTrayIcon className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
