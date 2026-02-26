import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Conecta tu cuenta universitaria",
    description:
      "Vincula tu cuenta del campus virtual de forma segura. Solo necesitas hacerlo una vez.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Escribe lo que necesitas",
    description:
      'Pregunta en lenguaje natural: "¿Qué tareas tengo mañana?", "¿Cuál es mi nota de Física?", "¿Hay algún anuncio nuevo?".',
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Recibe la info al instante",
    description:
      "Obtén respuestas claras y organizadas directamente en tu chat de Telegram. Sin esperas, sin complicaciones.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-primary-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Cómo funciona
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tan fácil como{" "}
              <span className="text-gradient">enviar un mensaje</span>
            </h2>
            <p className="text-lg text-gray-600">
              En tres simples pasos tendrás toda la información de tu universidad
              al alcance de un chat.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="relative text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5">
                    <div className="w-full h-full bg-gradient-to-r from-primary-300 to-accent-300 opacity-40 rounded-full" />
                  </div>
                )}

                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white shadow-lg shadow-primary-100 mb-6">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div className="text-primary-600">{step.icon}</div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
