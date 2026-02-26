"use client";

import AnimatedSection from "./AnimatedSection";
import { TELEGRAM_LINK } from "@/lib/constants";

const included = [
  "Consulta ilimitada de horarios",
  "Tareas y entregas pendientes",
  "Calificaciones en tiempo real",
  "Acceso a archivos del curso",
  "Anuncios de profesores",
  "Recordatorios de entregas",
  "Soporte por Telegram",
];

export default function Pricing() {
  return (
    <section id="precio" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Precio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Gratis. <span className="text-gradient">En serio.</span>
            </h2>
            <p className="text-lg text-gray-600">
              Creemos que acceder a tu información universitaria no debería costar
              nada. Por eso AdiuTask es y seguirá siendo gratuito.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur-lg opacity-20" />
              <div className="relative bg-white rounded-2xl border-2 border-primary-200 p-8 sm:p-10 shadow-xl">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Para siempre gratis
                  </span>
                </div>

                <div className="text-center mb-8 pt-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl sm:text-6xl font-extrabold text-gray-900">0€</span>
                    <span className="text-gray-500 text-lg">/mes</span>
                  </div>
                  <p className="text-gray-500 mt-2">Sin letra pequeña. Sin trucos.</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-lg hover:shadow-xl hover:shadow-primary-600/25 hover:scale-[1.02] transition-all duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Empezar gratis ahora
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
