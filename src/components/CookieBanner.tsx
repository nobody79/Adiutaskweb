"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm leading-relaxed">
                Usamos cookies esenciales para el funcionamiento del sitio.
                Consulta nuestra{" "}
                <a href="/cookies" className="text-primary-400 hover:text-primary-300 underline">
                  política de cookies
                </a>{" "}
                para más información.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={reject}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white border border-gray-700 rounded-lg hover:border-gray-500 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-sm font-medium bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
