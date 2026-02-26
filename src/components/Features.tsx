import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Consulta de horarios",
    description: "Mira tu horario del día, de la semana o de cualquier asignatura. Siempre actualizado.",
    color: "blue",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Tareas y entregas pendientes",
    description: "Conoce todas tus entregas con fechas y prioridad. Nunca más te pillarán por sorpresa.",
    color: "purple",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Calificaciones",
    description: "Consulta tus notas de exámenes, prácticas y evaluación continua en segundos.",
    color: "green",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Archivos del curso",
    description: "Accede a apuntes, presentaciones y materiales sin navegar por el campus virtual.",
    color: "orange",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Anuncios del profesor",
    description: "Entérate al momento de cualquier novedad, cambio de horario o aviso importante.",
    color: "red",
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    title: "Funciona desde Telegram",
    description: "Sin descargar nada nuevo. Usa la app que ya tienes instalada en tu móvil.",
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "group-hover:border-blue-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "group-hover:border-purple-200" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "group-hover:border-green-200" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "group-hover:border-orange-200" },
  red: { bg: "bg-red-50", text: "text-red-600", border: "group-hover:border-red-200" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "group-hover:border-cyan-200" },
};

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Funcionalidades
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas,{" "}
              <span className="text-gradient">en un solo chat</span>
            </h2>
            <p className="text-lg text-gray-600">
              AdiuTask reúne toda la información de tu universidad en un lugar
              accesible y fácil de usar.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            return (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div
                  className={`group p-6 rounded-2xl border border-gray-100 ${colors.border} hover:shadow-lg transition-all duration-300 h-full`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
