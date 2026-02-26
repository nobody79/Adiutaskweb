"use client";

import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { TELEGRAM_LINK } from "@/lib/constants";

interface HeroChatMessage {
  id: number;
  type: "user" | "bot";
  content: React.ReactNode;
  time: string;
}

const heroMessages: HeroChatMessage[] = [
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
  {
    id: 3,
    type: "user",
    content: <p className="text-sm text-gray-800">¿Y mi nota de Algoritmos?</p>,
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
      </>
    ),
    time: "10:31",
  },
];

function TypingDots() {
  return (
    <div className="flex justify-start">
      <div className="bg-white rounded-xl rounded-tl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [visibleMessages, setVisibleMessages] = useState<HeroChatMessage[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const springX2 = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const springY2 = useSpring(mouseY, { stiffness: 30, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToBottom = useCallback(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const runLoop = () => {
      setVisibleMessages([]);
      setShowTyping(false);
      let currentIndex = 0;

      const showNext = () => {
        if (cancelled || currentIndex >= heroMessages.length) {
          if (!cancelled) {
            // Wait 3 seconds then reset and loop
            const t = setTimeout(() => {
              if (!cancelled) runLoop();
            }, 3000);
            timeouts.push(t);
          }
          return;
        }

        const msg = heroMessages[currentIndex];

        if (msg.type === "bot") {
          setShowTyping(true);
          const t1 = setTimeout(() => {
            if (cancelled) return;
            setShowTyping(false);
            setVisibleMessages((prev) => [...prev, msg]);
            currentIndex++;
            const t2 = setTimeout(scrollToBottom, 50);
            timeouts.push(t2);
            const t3 = setTimeout(showNext, 1000);
            timeouts.push(t3);
          }, 1000);
          timeouts.push(t1);
        } else {
          setVisibleMessages((prev) => [...prev, msg]);
          currentIndex++;
          const t1 = setTimeout(scrollToBottom, 50);
          timeouts.push(t1);
          const t2 = setTimeout(showNext, 700);
          timeouts.push(t2);
        }
      };

      const t = setTimeout(showNext, 500);
      timeouts.push(t);
    };

    runLoop();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [scrollToBottom]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: springX2, y: springY2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600" />
              </span>
              Disponible ahora en Telegram
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Tu universidad,{" "}
              <span className="text-gradient">en tu bolsillo</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg">
              Consulta horarios, tareas, notas, archivos y anuncios de tu
              universidad directamente desde Telegram. Sin apps extra, sin
              complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-lg hover:shadow-xl hover:shadow-primary-600/25 hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Empieza gratis en Telegram
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-lg hover:border-primary-300 hover:text-primary-600 transition-all duration-300"
              >
                Cómo funciona
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                100% gratis
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Sin apps extra
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Datos seguros
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup - Animated */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-[3rem] blur-2xl opacity-20" />

              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[320px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Telegram header */}
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-3 pt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          AdiuTask Bot
                        </p>
                        <p className="text-white/70 text-xs">
                          {showTyping ? "escribiendo..." : "en línea"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div
                    ref={chatRef}
                    className="p-3 space-y-3 min-h-[360px] max-h-[360px] bg-[#e5ddd5] overflow-y-auto scroll-smooth"
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
                            <p className="text-[10px] text-gray-500 text-right mt-1">
                              {msg.time}
                            </p>
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
                        <TypingDots />
                      </motion.div>
                    )}
                  </div>

                  {/* Input bar */}
                  <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2">
                      <p className="text-xs text-gray-400">Escribe un mensaje...</p>
                    </div>
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
