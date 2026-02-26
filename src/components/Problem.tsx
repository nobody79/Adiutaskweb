import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Horarios imposibles de recordar",
    description: "Cada semestre cambian, cada profesor tiene su propio formato, y nunca sabes a qué hora es la siguiente clase.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Tareas que se te olvidan",
    description: "Entre tantas asignaturas, entregas y plazos, siempre hay algo que se escapa. Y te enteras el día antes.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Anuncios que nunca ves",
    description: "El profesor sube un aviso importante al campus virtual y te enteras tres días después... o nunca.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Demasiadas plataformas",
    description: "Moodle, campus virtual, correo, grupos de WhatsApp... La información está dispersa en mil sitios diferentes.",
  },
];

export default function Problem() {
  return (
    <section id="problema" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              El problema
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ser estudiante no debería ser tan{" "}
              <span className="text-gradient">complicado</span>
            </h2>
            <p className="text-lg text-gray-600">
              Cada día pierdes tiempo buscando información básica que debería estar
              al alcance de tu mano.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
