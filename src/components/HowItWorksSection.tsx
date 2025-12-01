"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: DevicePhoneMobileIcon,
      headline: "Scarica l'app e configura il profilo",
      body: "Scarica l'app, crea il profilo e imposta la tua tariffa. La verifica Stripe richiede 30 minuti. Decidi tu quando essere disponibile",
      bullets: [
        "Account Stripe certificato per pagamenti sicuri",
        "Zero costi di attivazione",
        "Controllo totale su disponibilità",
      ],
      imagePlaceholder: "Scarica e Crea il Tuo Profilo",
    },
    {
      number: "02",
      icon: MagnifyingGlassIcon,
      headline: "Il tuo profilo è attivo. I clienti ti trovano e ti chiamano",
      body: "Il tuo profilo è visibile nella directory Payphone. I clienti ti trovano, vedono la tua tariffa e chiamano immediatamente. Il pagamento avviene al momento della chiamata. Zero rischi",
      bullets: [
        "Visibilità immediata a migliaia di utenti",
        "Pagamento istantaneo quando chiamano",
        "Il tuo numero resta privato",
      ],
      imagePlaceholder: "I Clienti Ti Trovano e Ti Chiamano",
    },
    {
      number: "03",
      icon: VideoCameraIcon,
      headline: "Rispondi e guadagni subito",
      body: "Quando un cliente avvia una chiamata o videochiamata, ricevi una notifica in tempo reale. Accetti la chiamata e, alla fine della conversazione, incassi il pagamento direttamente sul tuo conto. Zero attese. Zero commissioni",
      bullets: [
        "Incasso immediato alla chiamata",
        "100% del pagamento è tuo",
        "Nessun sollecito, nessuna fattura",
      ],
      imagePlaceholder: "Rispondi e Guadagni Subito",
    },
  ];

  return (
    <section id="come-funziona" className="py-16 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Sezione */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {/* Badge */}
          <div className="inline-flex px-3.5 py-1.5 rounded-full bg-[#8B4FA3]/10 mb-3">
            <span className="text-xs font-medium text-[#8B4FA3]">
              COME FUNZIONA
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Come funziona in 3 semplici passaggi
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-gray-600">
            Scarica, configura e inizia a guadagnare in meno di un&apos;ora
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-[1400px] mx-auto px-5 lg:px-13">
          {steps.map((step, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-10 items-center ${
                  index < steps.length - 1 ? "mb-12" : ""
                }`}
              >
                {/* Colonna Sinistra - Contenuto */}
                <div>
                  {/* Layout come nell'immagine - Numero a sinistra, contenuto a destra */}
                  <div className="flex items-start gap-6">
                    {/* Colonna Sinistra - Numero e Linea */}
                    <div className="relative flex-shrink-0">
                      {/* Cerchio Numero Viola Semplice */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 rounded-full border-2 border-[#8B4FA3] bg-white flex items-center justify-center"
                      >
                        <span className="text-2xl font-bold text-[#8B4FA3]">
                          {step.number}
                        </span>
                      </motion.div>

                      {/* Linea Viola Connettrice - Sempre presente */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "80px" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 bg-[#8B4FA3]"
                      />
                    </div>

                    {/* Colonna Destra - Contenuto */}
                    <div className="flex-1">
                      {/* Titolo */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {step.headline}
                      </h3>

                      {/* Descrizione */}
                      <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                        {step.body}
                      </p>

                      {/* Bullet Points */}
                      <ul className="space-y-3">
                        {step.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-3 text-base text-gray-900"
                          >
                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Colonna Destra - Mockup Telefono */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex justify-center items-center"
                >
                  {/* Immagini per tutti gli step */}
                  <div className="relative w-[308px] max-w-[308px] lg:w-[345px] lg:max-w-[345px]">
                    <img
                      src={
                        index === 0
                          ? "/ste1 no sfondo.png"
                          : index === 1
                          ? "/step2 - nuova.png"
                          : "/step3 - nuovo.png"
                      }
                      alt={
                        index === 0
                          ? "Completa il tuo profilo"
                          : index === 1
                          ? "I clienti ti trovano"
                          : "Rispondi e guadagni"
                      }
                      className="w-full h-auto transition-transform duration-300 hover:-translate-y-1.5"
                      style={{
                        filter: "drop-shadow(0 16px 32px rgba(0, 0, 0, 0.12))",
                        aspectRatio: "9/17",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#footer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#4A9BE2] via-[#8B4FA3] to-[#E85D3F] text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Scarica l&apos;App Gratuitamente
            <ArrowDownTrayIcon className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
