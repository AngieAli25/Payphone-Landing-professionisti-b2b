"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Quanto costa iscriversi a Payphone?",
      answer:
        "Zero. Nessun costo di iscrizione, nessun abbonamento mensile, nessuna carta di credito richiesta. Scarichi l'app, ti registri e sei subito operativo. Payphone è completamente gratuito per i professionisti.",
    },
    {
      question: "Payphone prende commissioni sulle mie chiamate?",
      answer:
        "No. Guadagni il 100% di quello che fatturi. Nessuna commissione, nessuna percentuale trattenuta.",
    },
    {
      question: "Come e quando ricevo i pagamenti?",
      answer:
        "I pagamenti arrivano immediatamente dopo ogni chiamata, direttamente sul tuo conto Stripe. Non devi aspettare fine mese o accumulare saldi.",
    },
    {
      question: "Devo essere disponibile 24/7?",
      answer:
        "Assolutamente no. Tu decidi quando essere online e quando no. Puoi attivare/disattivare la disponibilità in qualsiasi momento dall'app. Controllo totale del tuo tempo.",
    },
    {
      question: "Come funziona la verifica del profilo?",
      answer:
        "Dopo la registrazione, carichi i tuoi documenti professionali. La verifica Stripe richiede circa 30 minuti. Una volta approvato, sei immediatamente visibile ai clienti e puoi iniziare a ricevere chiamate.",
    },
    {
      question: "Cosa succede se un cliente non paga?",
      answer:
        "Non può succedere. Il pagamento viene bloccato prima della chiamata. Il cliente non può chiamarti senza aver già pagato. Zero rischio di insolvenza per te.",
    },
    {
      question: "Posso scegliere la mia tariffa oraria?",
      answer:
        "Sì. Tu imposti liberamente la tua tariffa oraria. Payphone ti suggerisce un range basato sulla tua professione e esperienza, ma la decisione finale è sempre tua.",
    },
    {
      question: "Il mio numero di telefono resta privato?",
      answer:
        "Sì. Le chiamate passano tramite la piattaforma Payphone. Il cliente non vede mai il tuo numero personale. Privacy garantita al 100%.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Domande frequenti
          </h2>
          <p className="text-xl text-gray-600">
            Tutto quello che devi sapere per iniziare
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                openIndex === index
                  ? "border-[#8B4FA3] shadow-lg"
                  : "border-gray-200 shadow-sm"
              } ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-gray-50/50 transition-colors duration-200"
              >
                <span className="font-bold text-lg md:text-xl text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#8B4FA3] rotate-180"
                      : "bg-gray-200"
                  }`}
                >
                  {openIndex === index ? (
                    <MinusIcon className="w-5 h-5 text-white" />
                  ) : (
                    <PlusIcon className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 pt-2">
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
