"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function FinalCTASection() {
  const trustBadges = [
    "Certificato Stripe",
    "Crittografia SSL",
    "GDPR Compliant",
    "Verifica KYC",
  ];

  return (
    <>
      {/* CTA Section con gradient */}
      <section
        id="footer"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
          padding: "100px 60px",
          textAlign: "center",
        }}
      >
        {/* Blob decorativo */}
        <div
          className="absolute"
          style={{
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            top: "-200px",
            right: "-200px",
            borderRadius: "50%",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <style jsx>{`
          @media (max-width: 768px) {
            section {
              padding: 80px 24px !important;
            }
            .footer-title {
              font-size: 36px !important;
            }
            .footer-subtitle {
              font-size: 18px !important;
            }
            .app-buttons-container {
              flex-direction: column !important;
            }
            .app-store-button {
              width: 100% !important;
              max-width: 320px;
            }
            .trust-badges {
              gap: 20px !important;
            }
            .trust-badge {
              font-size: 13px !important;
            }
          }
        `}</style>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Titolo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-title"
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "white",
              marginBottom: "24px",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
            }}
          >
            Il tuo tempo vale
            <br />
            Inizia a guadagnare oggi
          </motion.h1>

          {/* Sottotitolo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-subtitle"
            style={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: "1.6",
              marginBottom: "48px",
              fontWeight: 400,
            }}
          >
            Scarica l'app gratuita, configura il tuo profilo in 30 minuti e
            inizia a monetizzare le tue competenze. Migliaia di professionisti
            si affidano già a Payphone.
          </motion.p>

          {/* Bottoni App Store */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="app-buttons-container"
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "60px",
            }}
          >
            {/* App Store Button */}
            <motion.a
              href="https://apps.apple.com/it/app/online-payphone/id6738121965"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="app-store-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 32px",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "14px",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(0, 0, 0, 0.25)";
                e.currentTarget.style.borderColor =
                  "rgba(255, 255, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.borderColor =
                  "rgba(255, 255, 255, 0.3)";
              }}
            >
              {/* Apple Icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <div style={{ fontSize: "11px", opacity: 0.8 }}>
                  Scarica su
                </div>
                <div style={{ fontSize: "16px", fontWeight: 700 }}>
                  App Store
                </div>
              </div>
            </motion.a>

            {/* Google Play Button */}
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.onlinephonepay.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="app-store-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 32px",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "14px",
                color: "white",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(255, 255, 255, 0.25)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(0, 0, 0, 0.25)";
                e.currentTarget.style.borderColor =
                  "rgba(255, 255, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.borderColor =
                  "rgba(255, 255, 255, 0.3)";
              }}
            >
              {/* Google Play Icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div>
                <div style={{ fontSize: "11px", opacity: 0.8 }}>
                  Scarica su
                </div>
                <div style={{ fontSize: "16px", fontWeight: 700 }}>
                  Google Play
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="trust-badges"
            style={{
              display: "flex",
              gap: "32px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="trust-badge"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 500,
                  opacity: 0.9,
                }}
              >
                <CheckIcon style={{ width: "20px", height: "20px", color: "#10b981" }} />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Bar */}
      <div
        style={{
          background: "#1a1a1a",
          padding: "32px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <style jsx>{`
          @media (max-width: 768px) {
            .footer-bar-container {
              flex-direction: column !important;
              text-align: center;
              padding: 24px !important;
            }
            .footer-links {
              justify-content: center !important;
            }
          }
        `}</style>

        <div className="footer-bar-container" style={{ display: "contents" }}>
          <div style={{ color: "#9ca3af", fontSize: "14px" }}>
            Powered by Meraviglia
          </div>
          <div
            className="footer-links"
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.iubenda.com/privacy-policy/64809643"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9ca3af",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              Privacy Policy
            </a>
            <span style={{ color: "#4b5563" }}>|</span>
            <a
              href="https://www.iubenda.com/privacy-policy/64809643/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#9ca3af",
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
