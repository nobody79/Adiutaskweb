import AnimatedSection from "./AnimatedSection";
import { TELEGRAM_LINK } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          {/* Social proof avatars */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex -space-x-3">
              {["bg-blue-400", "bg-purple-400", "bg-green-400", "bg-orange-400", "bg-pink-400"].map((color, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${color} border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold`}
                >
                  {["MG", "CR", "LM", "JS", "AP"][i]}
                </div>
              ))}
            </div>
            <p className="ml-4 text-white/90 text-sm font-medium">
              +500 estudiantes ya confían en AdiuTask
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Empieza a organizarte hoy mismo
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Únete a los estudiantes que ya usan AdiuTask para tener toda su vida
            universitaria bajo control. Es gratis y solo te llevará un minuto.
          </p>

          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-primary-700 font-bold text-lg hover:shadow-2xl hover:shadow-black/20 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Empieza gratis en Telegram
          </a>

          <p className="mt-6 text-sm text-white/70">
            Sin tarjeta de crédito. Sin descargas. Sin complicaciones.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
