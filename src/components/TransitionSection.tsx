"use client";

import { motion } from "framer-motion";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function TransitionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
            <ArrowTrendingUpIcon className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Non Devi Cambiare Nulla. Solo Iniziare a Guadagnare.
          </h2>

          <div className="space-y-6 text-lg text-gray-600 max-w-3xl mx-auto">
            <p>Payphone non è un nuovo modo di lavorare.</p>
            <p className="font-semibold text-gray-800">
              È il sistema che mancava per farti pagare per quello che già fai.
            </p>

            <div className="pt-8">
              <p className="text-xl font-semibold text-gray-900">
                Stessa professionalità. Stesso servizio.
              </p>
              <p className="text-2xl font-bold text-blue-600 mt-2">
                Finalmente pagato come meriti.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
