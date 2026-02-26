"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const audiences = [
  {
    emoji: "🎓",
    title: "Estudiantes de grado",
    description: "Gestiona todas tus asignaturas, trabajos y exámenes desde un solo lugar.",
  },
  {
    emoji: "📚",
    title: "Estudiantes de máster",
    description: "Mantén el control de tus proyectos, entregas y horarios intensivos.",
  },
  {
    emoji: "🔄",
    title: "Repetidores o Erasmus",
    description: "Integra horarios complejos y asignaturas de distintos cursos sin líos.",
  },
];

const testimonials = [
  {
    name: "María G.",
    role: "3º Ingeniería Informática",
    quote:
      "Antes perdía como 20 minutos al día solo buscando info en el campus virtual. Ahora le pregunto al bot y lo tengo todo en segundos. Es como tener un asistente personal.",
    stars: 5,
  },
  {
    name: "Carlos R.",
    role: "2º Derecho",
    quote:
      "Lo mejor es que me avisa de las entregas. La semana pasada me salvó de olvidar un trabajo de Constitucional que valía un 30% de la nota.",
    stars: 5,
  },
  {
    name: "Laura M.",
    role: "4º ADE + Marketing",
    quote:
      "Con el doble grado tengo un horario imposible. AdiuTask me organiza todo sin tener que abrir 5 páginas diferentes cada mañana.",
    stars: 5,
  },
  {
    name: "Javier S.",
    role: "Máster en Data Science",
    quote:
      "Consultar mis notas y las tareas pendientes directamente desde Telegram es una pasada. Ojalá lo hubiera tenido en el grado.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${count} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= count ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ForWho() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-accent-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Para quién
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Diseñado para{" "}
                <span className="text-gradient">estudiantes universitarios</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Si estudias en una universidad en España y estás cansado de perder
                tiempo navegando entre plataformas, AdiuTask es para ti.
              </p>

              <div className="space-y-6">
                {audiences.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl"
                      role="img"
                      aria-label={item.title}
                    >
                      <span aria-hidden="true">{item.emoji}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-accent-200 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-2xl p-8 shadow-xl min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
                        <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed mb-4">
                      &ldquo;{testimonials[current].quote}&rdquo;
                    </blockquote>
                    <StarRating count={testimonials[current].stars} />
                  </motion.div>
                </AnimatePresence>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === current
                          ? "bg-primary-600 w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Ver testimonio ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
