"use client";

import { motion } from "framer-motion";
import {
  LockClosedIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

export default function TrustSection() {
  const trustItems = [
    {
      icon: BanknotesIcon,
      title: "Zero Commissioni",
      description: "Tutto quello che guadagni è tuo",
      badge: "⭐ La più importante",
      badgeStyle: {
        background: "rgba(16, 185, 129, 0.1)",
        color: "#059669",
        border: "1px solid rgba(16, 185, 129, 0.2)",
      },
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      shadowColor: "rgba(16, 185, 129, 0.25)",
    },
    {
      icon: CreditCardIcon,
      title: "Pagamenti Immediati",
      description: "Incassi istantanei dopo ogni chiamata",
      badge: "Powered by Stripe",
      badgeStyle: {
        background: "rgba(99, 91, 255, 0.1)",
        color: "#5046E5",
        border: "1px solid rgba(99, 91, 255, 0.2)",
      },
      gradient: "linear-gradient(135deg, #635BFF, #5046E5)",
      shadowColor: "rgba(99, 91, 255, 0.25)",
    },
    {
      icon: ShieldCheckIcon,
      title: "Verifica Rapida",
      description: "Processo rapido e sicuro",
      badge: "✓ Setup in 30 min",
      badgeStyle: {
        background: "rgba(59, 130, 246, 0.1)",
        color: "#2563eb",
        border: "1px solid rgba(59, 130, 246, 0.2)",
      },
      gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
      shadowColor: "rgba(59, 130, 246, 0.25)",
    },
    {
      icon: LockClosedIcon,
      title: "Sicurezza SSL",
      description: "Protezione dati bancaria",
      badge: "🔒 Livello Enterprise",
      badgeStyle: {
        background: "rgba(139, 92, 246, 0.1)",
        color: "#7c3aed",
        border: "1px solid rgba(139, 92, 246, 0.2)",
      },
      gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      shadowColor: "rgba(139, 92, 246, 0.25)",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @media (max-width: 1024px) {
          .payments-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 640px) {
          .payments-grid {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
          }
          .payment-card {
            min-height: 280px !important;
            padding: 32px 24px !important;
          }
          .payment-title {
            font-size: 16px !important;
            min-height: auto !important;
          }
          .payment-badge {
            font-size: 11px !important;
            padding: 6px 12px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6"
          >
            <span className="text-2xl">🔐</span>
            <span className="text-sm font-semibold text-purple-700">SICUREZZA E TRASPARENZA</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Pagamenti sicuri,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
              certificati e immediati
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ogni professionista ha un account Stripe dedicato, verificato e
            certificato. I tuoi dati e i tuoi guadagni sono protetti da
            crittografia bancaria di livello enterprise.
          </p>
        </motion.div>

        <div
          className="payments-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            margin: "60px auto",
          }}
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="payment-card relative overflow-hidden"
              style={{
                background: "linear-gradient(to bottom, white, rgba(249, 250, 251, 0.5))",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "20px",
                padding: "40px 32px",
                textAlign: "center",
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.02)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              onHoverStart={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.boxShadow = "0 12px 30px rgba(168, 85, 247, 0.15), 0 0 0 2px rgba(168, 85, 247, 0.1)";
                target.style.borderColor = "rgba(168, 85, 247, 0.3)";
                target.style.backgroundImage = "linear-gradient(to bottom, white, rgba(249, 250, 251, 1))";
              }}
              onHoverEnd={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.02)";
                target.style.borderColor = "rgba(0, 0, 0, 0.08)";
                target.style.backgroundImage = "linear-gradient(to bottom, white, rgba(249, 250, 251, 0.5))";
              }}
            >
              {/* Decorative corner gradient */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${item.shadowColor}, transparent)`,
                  pointerEvents: "none",
                }}
              />
              {/* Icon */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: item.gradient,
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  boxShadow: `0 8px 20px ${item.shadowColor}`,
                }}
              >
                <item.icon style={{ width: "40px", height: "40px" }} className="text-white" />
              </div>

              {/* Content wrapper */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Title */}
                <h3
                  className="payment-title"
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: "12px",
                    lineHeight: "1.3",
                    minHeight: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    lineHeight: "1.6",
                    minHeight: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Badge */}
              <span
                className="payment-badge"
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginTop: "16px",
                  ...item.badgeStyle,
                }}
              >
                {item.badge}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
