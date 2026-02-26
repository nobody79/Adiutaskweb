import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad - AdiuTask",
  description: "Política de privacidad de AdiuTask. Conoce cómo protegemos tus datos.",
};

export default function Privacidad() {
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
          Política de Privacidad
        </h1>
        <p className="text-sm text-gray-500 mb-8">Última actualización: 26 de febrero de 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Responsable del tratamiento</h2>
            <p>AdiuTask es responsable del tratamiento de los datos personales recogidos a través de este sitio web y del bot de Telegram.</p>
            <p>Email de contacto: <a href="mailto:hola@adiutask.com" className="text-primary-600 hover:underline">hola@adiutask.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Datos que recogemos</h2>
            <p>Recogemos los siguientes tipos de datos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Datos de cuenta de Telegram:</strong> ID de usuario, nombre de usuario (cuando autorizas el bot).</li>
              <li><strong>Credenciales universitarias:</strong> Se utilizan exclusivamente para acceder a tu información académica y nunca se almacenan en texto plano.</li>
              <li><strong>Datos académicos:</strong> Horarios, calificaciones, tareas y anuncios consultados a través del bot.</li>
              <li><strong>Datos de uso:</strong> Interacciones con el bot para mejorar el servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Finalidad del tratamiento</h2>
            <p>Utilizamos tus datos para:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Proporcionarte acceso a tu información universitaria a través de Telegram.</li>
              <li>Enviar recordatorios de entregas y tareas (si lo autorizas).</li>
              <li>Mejorar y optimizar el funcionamiento del servicio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Base legal</h2>
            <p>El tratamiento se basa en tu consentimiento explícito al vincular tu cuenta universitaria con el bot de Telegram.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Seguridad</h2>
            <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos, incluyendo cifrado en tránsito y en reposo. Las credenciales universitarias se cifran y nunca se almacenan en texto plano.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Compartición de datos</h2>
            <p>No compartimos tus datos personales con terceros, salvo cuando sea necesario para el funcionamiento del servicio (acceso a la API de tu universidad) o cuando estemos legalmente obligados.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Tus derechos</h2>
            <p>Puedes ejercer los siguientes derechos contactando con nosotros en <a href="mailto:hola@adiutask.com" className="text-primary-600 hover:underline">hola@adiutask.com</a>:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Acceso a tus datos personales.</li>
              <li>Rectificación de datos inexactos.</li>
              <li>Supresión de tus datos (&ldquo;derecho al olvido&rdquo;).</li>
              <li>Portabilidad de tus datos.</li>
              <li>Oposición al tratamiento.</li>
              <li>Limitación del tratamiento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Retención de datos</h2>
            <p>Conservamos tus datos mientras mantengas tu cuenta activa en el bot. Si dejas de utilizar el servicio, tus datos se eliminan automáticamente tras 6 meses de inactividad. Puedes solicitar la eliminación inmediata en cualquier momento.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Contacto</h2>
            <p>Para cualquier consulta sobre esta política de privacidad, puedes escribirnos a <a href="mailto:hola@adiutask.com" className="text-primary-600 hover:underline">hola@adiutask.com</a>.</p>
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
