"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "¿Es gratis?",
    answer:
      "Sí, AdiuTask es completamente gratis para todos los estudiantes. Queremos que acceder a tu información universitaria sea fácil y sin barreras.",
  },
  {
    question: "¿Es seguro? ¿Qué pasa con mis datos?",
    answer:
      "Tu seguridad es nuestra prioridad. Utilizamos cifrado de extremo a extremo y nunca almacenamos tus credenciales. Solo accedemos a la información de tu universidad cuando tú la solicitas, y no compartimos tus datos con terceros.",
  },
  {
    question: "¿Qué universidades soporta?",
    answer:
      "Actualmente estamos trabajando con varias universidades en España. Estamos en fase de expansión y añadimos nuevas universidades cada mes. Si la tuya aún no está disponible, escríbenos y la priorizaremos.",
  },
  {
    question: "¿Cómo conecto mi cuenta universitaria?",
    answer:
      'Es muy sencillo: abre el bot en Telegram, escribe /start y sigue las instrucciones. Solo necesitarás tu email universitario y autorizar el acceso. Todo el proceso toma menos de 2 minutos.',
  },
  {
    question: "¿Funciona en cualquier dispositivo?",
    answer:
      "Sí, al funcionar a través de Telegram, AdiuTask está disponible en Android, iOS, Windows, macOS, Linux y la versión web de Telegram. Donde uses Telegram, ahí estará AdiuTask.",
  },
  {
    question: "¿Puedo recibir recordatorios de entregas?",
    answer:
      "¡Por supuesto! Puedes configurar notificaciones para que te avisemos antes de cada entrega. Tú eliges con cuánta antelación quieres el recordatorio.",
  },
];

function FAQItem({
  question,
  answer,
  id,
}: {
  question: string;
  answer: string;
  id: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left gap-4 group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <span className="text-base font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 group-hover:bg-primary-100 flex items-center justify-center transition-colors"
        >
          <svg
            className="w-3.5 h-3.5 text-gray-600 group-hover:text-primary-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v12M6 12h12"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              ¿Tienes dudas? Aquí te resolvemos las más comunes.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="bg-gray-50 rounded-2xl px-6 sm:px-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} id={String(index)} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
