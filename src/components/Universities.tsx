"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const universities = [
  { name: "Universidad Complutense de Madrid", short: "UCM" },
  { name: "Universidad Politécnica de Madrid", short: "UPM" },
  { name: "Universidad de Barcelona", short: "UB" },
  { name: "Universidad Autónoma de Madrid", short: "UAM" },
  { name: "Universidad de Valencia", short: "UV" },
  { name: "Universidad de Sevilla", short: "US" },
  { name: "Universidad de Granada", short: "UGR" },
  { name: "Universidad del País Vasco", short: "UPV" },
  { name: "Universidad Carlos III de Madrid", short: "UC3M" },
  { name: "Universidad Politécnica de Valencia", short: "UPV" },
];

export default function Universities() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Universidades
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Compatible con las principales universidades de España
            </h2>
            <p className="text-gray-600">
              Y seguimos añadiendo más cada mes
            </p>
          </div>
        </AnimatedSection>

        {/* Scrolling university logos */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1400] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-6"
          >
            {[...universities, ...universities].map((uni, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 min-w-[250px]"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold text-xs">{uni.short}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {uni.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <AnimatedSection delay={0.2}>
          <p className="text-center text-sm text-gray-500 mt-8">
            ¿Tu universidad no está en la lista?{" "}
            <a href="mailto:hola@adiutask.com" className="text-primary-600 hover:text-primary-700 font-medium underline">
              Escríbenos
            </a>{" "}
            y la priorizaremos.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
