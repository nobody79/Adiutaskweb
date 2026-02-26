"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface ChatMessage {
  id: number;
  type: "user" | "bot";
  content: React.ReactNode;
  time: string;
}

const useCases = [
  {
    label: "Tareas pendientes",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Consulta de nota",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: "Horario de mañana",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const conversations: ChatMessage[][] = [
  // Use case 1: Tareas pendientes
  [
    {
      id: 1,
      type: "user",
      content: <p className="text-sm text-gray-800">¿Qué tareas tengo para esta semana?</p>,
      time: "10:30",
    },
    {
      id: 2,
      type: "bot",
      content: (
        <>
          <p className="text-sm text-gray-800 font-medium mb-2">Tienes 3 entregas esta semana:</p>
          <div className="space-y-1.5 text-xs text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">●</span>
              <div>
                <p className="font-medium">Práctica 4 - Algoritmos</p>
                <p className="text-gray-500">Mar 26 Feb</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-500 mt-0.5">●</span>
              <div>
                <p className="font-medium">Ensayo - Filosofía</p>
                <p className="text-gray-500">Jue 28 Feb</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">●</span>
              <div>
                <p className="font-medium">Informe Lab - Física</p>
                <p className="text-gray-500">Vie 1 Mar</p>
              </div>
            </div>
          </div>
        </>
      ),
      time: "10:30",
    },
  ],
  // Use case 2: Consulta de nota
  [
    {
      id: 3,
      type: "user",
      content: <p className="text-sm text-gray-800">¿Cuál es mi nota de Algoritmos?</p>,
      time: "10:31",
    },
    {
      id: 4,
      type: "bot",
      content: (
        <>
          <p className="text-sm text-gray-800">
            Tu última nota en <span className="font-semibold">Algoritmos</span>:
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-600">8.5</span>
            <span className="text-xs text-gray-500">/ 10</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Parcial 2 - 20 Feb 2026</p>
        </>
      ),
      time: "10:31",
    },
  ],
  // Use case 3: Horario de mañana
  [
    {
      id: 5,
      type: "user",
      content: <p className="text-sm text-gray-800">¿Qué clases tengo mañana?</p>,
      time: "10:32",
    },
    {
      id: 6,
      type: "bot",
      content: (
        <>
          <p className="text-sm text-gray-800 font-medium mb-2">Tu horario de mañana (jueves):</p>
          <div className="space-y-1.5 text-xs text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-primary-500 font-mono font-medium">09:00</span>
              <div>
                <p className="font-medium">Algoritmos y Estructuras</p>
                <p className="text-gray-500">Aula 2.3 - Edificio A</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-500 font-mono font-medium">11:30</span>
              <div>
                <p className="font-medium">Bases de Datos</p>
                <p className="text-gray-500">Lab 1.2 - Edificio B</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary-500 font-mono font-medium">16:00</span>
              <div>
                <p className="font-medium">Filosofía de la Ciencia</p>
                <p className="text-gray-500">Aula Magna - Edificio C</p>
              </div>
            </div>
          </div>
        </>
      ),
      time: "10:32",
    },
  ],
];

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

export default function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  const scrollToBottom = useCallback(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  const runDemo = useCallback(() => {
    setVisibleMessages([]);
    setActiveUseCase(0);
    setIsFinished(false);
    setShowTyping(false);

    const allMessages = conversations.flat();
    let currentIndex = 0;
    let currentUseCase = 0;

    const showNext = () => {
      if (currentIndex >= allMessages.length) {
        setIsFinished(true);
        return;
      }

      const msg = allMessages[currentIndex];

      // Update active use case based on message index
      if (currentIndex === 0) currentUseCase = 0;
      else if (currentIndex === 2) currentUseCase = 1;
      else if (currentIndex === 4) currentUseCase = 2;
      setActiveUseCase(currentUseCase);

      if (msg.type === "bot") {
        // Show typing indicator before bot messages
        setShowTyping(true);
        setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, msg]);
          currentIndex++;
          setTimeout(scrollToBottom, 50);
          setTimeout(showNext, 1200);
        }, 1200);
      } else {
        setVisibleMessages((prev) => [...prev, msg]);
        currentIndex++;
        setTimeout(scrollToBottom, 50);
        setTimeout(showNext, 800);
      }
    };

    // Small delay before starting
    setTimeout(showNext, 600);
  }, [scrollToBottom]);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      runDemo();
    }
  }, [isInView, runDemo]);

  const handleReplay = () => {
    hasStarted.current = true;
    runDemo();
  };

  return (
    <section ref={sectionRef} id="demo" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Demo interactiva
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mira cómo funciona{" "}
              <span className="text-gradient">en tiempo real</span>
            </h2>
            <p className="text-lg text-gray-600">
              Así de fácil es consultar tu información universitaria con AdiuTask.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12">
          {/* Side panel - desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4 w-64 pt-8"
          >
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Casos de uso
            </p>
            {useCases.map((uc, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeUseCase === index
                    ? "border-primary-300 bg-primary-50 shadow-md shadow-primary-100"
                    : "border-gray-100 bg-white"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    activeUseCase === index
                      ? "bg-primary-100 text-primary-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {uc.icon}
                </div>
                <span
                  className={`font-medium text-sm transition-colors duration-300 ${
                    activeUseCase === index ? "text-primary-700" : "text-gray-500"
                  }`}
                >
                  {uc.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-[3rem] blur-2xl opacity-20" />

              {/* Phone frame */}
              <div className="relative w-[300px] sm:w-[340px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-3 pt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">AdiuTask Bot</p>
                        <p className="text-white/70 text-xs">en línea</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div
                    ref={chatRef}
                    className="p-3 space-y-3 h-[400px] bg-[#e5ddd5] overflow-y-auto scroll-smooth"
                  >
                    <AnimatePresence>
                      {visibleMessages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`${
                              msg.type === "user"
                                ? "bg-[#dcf8c6] rounded-xl rounded-tr-sm"
                                : "bg-white rounded-xl rounded-tl-sm"
                            } px-3 py-2 max-w-[85%] shadow-sm`}
                          >
                            {msg.content}
                            <p className="text-[10px] text-gray-500 text-right mt-1">{msg.time}</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {showTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <TypingIndicator />
                      </motion.div>
                    )}
                  </div>

                  {/* Input bar */}
                  <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2">
                      <p className="text-xs text-gray-400">Escribe un mensaje...</p>
                    </div>
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Replay button */}
            <AnimatePresence>
              {isFinished && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={handleReplay}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-600/25 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Repetir demo
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Mobile use case indicators */}
          <div className="flex lg:hidden gap-2 mt-4">
            {useCases.map((uc, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeUseCase === index
                    ? "bg-primary-100 text-primary-700"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {uc.icon}
                {uc.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
