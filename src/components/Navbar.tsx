"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Image
              src="/logo.svg"
              alt="Payphone"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#come-funziona"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Come funziona
            </a>
            <a
              href="#calcolatore"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Guadagno effettivo
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
