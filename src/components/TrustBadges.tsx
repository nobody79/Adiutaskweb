import AnimatedSection from "./AnimatedSection";

const badges = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Cifrado de extremo a extremo",
    description: "Toda la comunicación entre tu dispositivo y nuestros servidores está cifrada con TLS.",
    color: "blue",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: "Sin contraseñas almacenadas",
    description: "Nunca guardamos tus credenciales universitarias. Usamos tokens seguros de sesión.",
    color: "green",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Cumplimiento GDPR",
    description: "Tus datos se procesan conforme al Reglamento General de Protección de Datos europeo.",
    color: "purple",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Sin venta de datos",
    description: "Tu información académica es tuya. Jamás vendemos ni compartimos tus datos con terceros.",
    color: "red",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "group-hover:border-blue-200" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "group-hover:border-green-200" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "group-hover:border-purple-200" },
  red: { bg: "bg-red-50", text: "text-red-600", border: "group-hover:border-red-200" },
};

export default function TrustBadges() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Seguridad y privacidad
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tus datos están{" "}
              <span className="text-gradient">protegidos</span>
            </h2>
            <p className="text-lg text-gray-600">
              La seguridad de tu información académica es nuestra prioridad absoluta.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const colors = colorMap[badge.color];
            return (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div
                  className={`group p-6 rounded-2xl border border-gray-100 ${colors.border} hover:shadow-lg transition-all duration-300 h-full text-center`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mx-auto mb-4`}
                  >
                    {badge.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {badge.description}
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
