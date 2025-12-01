"use client";

import { motion } from "framer-motion";
import {
  ScaleIcon,
  CalculatorIcon,
  BanknotesIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

// Icone Custom SVG
const BrainIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path d="M6 18a4 4 0 0 1-1.967-.516" />
    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
  </svg>
);

const AppleIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
    <path d="M10 2c1 .5 2 2 2 5" />
  </svg>
);

const DumbbellIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  </svg>
);

const PawPrintIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="20" cy="16" r="2" />
    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
  </svg>
);

export default function CategoriesSection() {
  const categories = [
    { name: "Avvocati", icon: ScaleIcon, count: "180+ attivi" },
    { name: "Commercialisti", icon: CalculatorIcon, count: "145+ attivi" },
    { name: "Psicologi", icon: BrainIcon, count: "220+ attivi" },
    {
      name: "Consulenti Finanziari",
      icon: BanknotesIcon,
      count: "95+ attivi",
    },
    { name: "Coach", icon: AcademicCapIcon, count: "165+ attivi" },
    { name: "Nutrizionisti", icon: AppleIcon, count: "130+ attivi" },
    { name: "Personal Trainer", icon: DumbbellIcon, count: "210+ attivi" },
    {
      name: "Consulenti Marketing",
      icon: MegaphoneIcon,
      count: "88+ attivi",
    },
    { name: "Architetti", icon: HomeModernIcon, count: "75+ attivi" },
    {
      name: "Ingegneri",
      icon: WrenchScrewdriverIcon,
      count: "92+ attivi",
    },
    { name: "Veterinari", icon: PawPrintIcon, count: "68+ attivi" },
    { name: "Notai", icon: DocumentTextIcon, count: "45+ attivi" },
  ];

  // Blob shapes sottili per background
  const blobs = [
    {
      id: 1,
      size: 500,
      left: "10%",
      top: "15%",
      color: "rgba(102, 126, 234, 0.06)",
    },
    {
      id: 2,
      size: 600,
      right: "5%",
      bottom: "10%",
      color: "rgba(168, 85, 247, 0.05)",
    },
    {
      id: 3,
      size: 400,
      left: "70%",
      top: "60%",
      color: "rgba(118, 75, 162, 0.08)",
    },
  ];

  // Floating dots decorativi
  const dots = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 4, // 4-8px
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 30, // 30-50s
    delay: Math.random() * 10,
  }));

  return (
    <section
      className="py-24"
      style={{
        background: "#fafafa",
      }}
    >
      <div className="categories-container" style={{ maxWidth: "1600px", margin: "0 auto", padding: "100px 80px" }}>
        <style jsx>{`
          .categories-grid {
            display: grid;
            grid-template-columns: repeat(6, minmax(200px, 1fr));
            gap: 28px;
          }

          @media (max-width: 1400px) {
            .categories-grid {
              grid-template-columns: repeat(4, 1fr);
              gap: 24px;
            }
          }

          @media (max-width: 1024px) {
            .categories-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
          }

          @media (max-width: 768px) {
            .categories-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
            .categories-container {
              padding: 60px 24px !important;
            }
            .category-name {
              white-space: normal !important;
              font-size: 14px !important;
            }
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              letterSpacing: "-0.02em",
              color: "#0a0a0a",
              lineHeight: "1.2",
            }}
          >
            Professionisti di oltre 50 settori
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              usano Payphone
            </span>
          </h2>
        </motion.div>

        {/* Grid di categorie */}
        <div className="categories-grid mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="cursor-pointer category-card"
              style={{
                padding: "40px 32px 48px 32px",
                minHeight: "190px",
                aspectRatio: "1 / 1.08",
                borderRadius: "16px",
                background: "white",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.2s ease",
              }}
              whileHover={{
                y: -4,
              }}
            >

              {/* Icon container */}
              <div
                className="mx-auto flex items-center justify-center"
                style={{
                  width: "97px",
                  height: "97px",
                  marginBottom: "31px",
                  background:
                    "linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(139, 92, 246, 0.08))",
                  borderRadius: "16px",
                  color: "#764ba2",
                }}
              >
                <category.icon
                  style={{ width: "48px", height: "48px" }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Category name */}
              <div
                className="category-name"
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  letterSpacing: "-0.01em",
                  marginBottom: "8px",
                  textAlign: "center",
                  lineHeight: "1.3",
                  whiteSpace: "nowrap",
                }}
              >
                {category.name}
              </div>

              {/* Category count */}
              <div
                className="flex items-center justify-center gap-1"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#6b7280",
                }}
              >
                <span style={{ color: "#a855f7" }}>•</span>
                <span>{category.count}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testo aggiuntivo e CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            style={{
              fontSize: "18px",
              color: "#6b7280",
              marginBottom: "32px",
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            E oltre 40 altre categorie professionali...
          </motion.p>

          {/* CTA Button Premium */}
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 cursor-pointer"
            style={{
              padding: "16px 32px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "12px",
              border: "none",
              boxShadow:
                "0 4px 12px rgba(118, 75, 162, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
            }}
            onHoverStart={(e) => {
              const target = e.currentTarget as HTMLElement | null;
              if (!target) return;
              target.style.boxShadow =
                "0 6px 20px rgba(118, 75, 162, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)";
            }}
            onHoverEnd={(e) => {
              const target = e.currentTarget as HTMLElement | null;
              if (!target) return;
              target.style.boxShadow =
                "0 4px 12px rgba(118, 75, 162, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
            }}
          >
            <span>Trova la tua categoria</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRightIcon style={{ width: "20px", height: "20px" }} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
