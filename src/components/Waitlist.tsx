"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-accent-50/50 to-primary-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-100 mb-6">
              <svg className="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              ¿Tu universidad aún no está disponible?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Déjanos tu email universitario y te avisamos en cuanto añadamos tu
              universidad. Además, la priorizaremos en nuestro roadmap.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-green-50 text-green-700"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">¡Apuntado! Te avisaremos cuando esté lista.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.email@universidad.es"
                  required
                  className="flex-1 px-5 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold hover:shadow-lg hover:shadow-primary-600/25 transition-all duration-300 whitespace-nowrap"
                >
                  Avisadme
                </button>
              </form>
            )}

            <p className="text-xs text-gray-400 mt-4">
              Solo usaremos tu email para avisarte. Nada de spam.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
