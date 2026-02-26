import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio - AdiuTask",
  description: "Términos y condiciones de uso de AdiuTask.",
};

export default function Terminos() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              Adiu<span className="text-primary-600">Task</span>
            </span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Términos de Servicio
        </h1>
        <p className="text-sm text-gray-500 mb-8">Última actualización: 26 de febrero de 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Aceptación de los términos</h2>
            <p>Al utilizar AdiuTask, aceptas estos términos de servicio en su totalidad. Si no estás de acuerdo con alguno de ellos, no deberías utilizar el servicio.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Descripción del servicio</h2>
            <p>AdiuTask es un bot de Telegram que permite a estudiantes universitarios consultar información académica (horarios, tareas, calificaciones, archivos y anuncios) de su universidad de forma centralizada.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Uso aceptable</h2>
            <p>Te comprometes a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Utilizar el servicio únicamente para consultar tu propia información académica.</li>
              <li>No intentar acceder a datos de otros usuarios.</li>
              <li>No utilizar el servicio para actividades ilegales o no autorizadas.</li>
              <li>No intentar vulnerar la seguridad del servicio.</li>
              <li>Proporcionar información veraz al registrarte.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Cuenta y seguridad</h2>
            <p>Eres responsable de mantener la seguridad de tu cuenta de Telegram y de la vinculación con tu cuenta universitaria. AdiuTask no se hace responsable de accesos no autorizados derivados de negligencia del usuario.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Disponibilidad del servicio</h2>
            <p>AdiuTask se ofrece &ldquo;tal cual&rdquo; y &ldquo;según disponibilidad&rdquo;. No garantizamos disponibilidad ininterrumpida del servicio. Pueden producirse interrupciones por mantenimiento, actualizaciones o causas ajenas a nuestro control.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Precio</h2>
            <p>AdiuTask es un servicio gratuito. Nos reservamos el derecho de introducir funcionalidades premium en el futuro, que serán siempre opcionales. Las funcionalidades gratuitas actuales seguirán siendo gratuitas.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Propiedad intelectual</h2>
            <p>Todo el contenido, diseño, logotipos y código de AdiuTask son propiedad de AdiuTask y están protegidos por las leyes de propiedad intelectual aplicables.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Limitación de responsabilidad</h2>
            <p>AdiuTask no se hace responsable de:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Inexactitudes en la información proporcionada por las plataformas universitarias.</li>
              <li>Interrupciones del servicio de Telegram o de los campus virtuales.</li>
              <li>Daños indirectos derivados del uso del servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Modificaciones</h2>
            <p>Podemos modificar estos términos en cualquier momento. Los cambios significativos se comunicarán a través del bot de Telegram. El uso continuado del servicio tras los cambios constituye la aceptación de los mismos.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Contacto</h2>
            <p>Para cualquier consulta, escríbenos a <a href="mailto:hola@adiutask.com" className="text-primary-600 hover:underline">hola@adiutask.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
            &larr; Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
