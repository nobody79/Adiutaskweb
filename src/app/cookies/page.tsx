import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies - AdiuTask",
  description: "Información sobre el uso de cookies en AdiuTask.",
};

export default function Cookies() {
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
          Política de Cookies
        </h1>
        <p className="text-sm text-gray-500 mb-8">Última actualización: 26 de febrero de 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar preferencias, mejorar la experiencia de usuario y analizar el tráfico del sitio.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Cookies que utilizamos</h2>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Cookies estrictamente necesarias</h3>
            <p>Son esenciales para el funcionamiento del sitio web y no se pueden desactivar.</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium text-gray-900">Cookie</th>
                    <th className="text-left px-4 py-2 font-medium text-gray-900">Propósito</th>
                    <th className="text-left px-4 py-2 font-medium text-gray-900">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-2 font-mono text-xs">cookie_consent</td>
                    <td className="px-4 py-2">Almacena tu preferencia de aceptación de cookies</td>
                    <td className="px-4 py-2">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-medium text-gray-800 mt-6 mb-3">Cookies analíticas</h3>
            <p>Actualmente, AdiuTask <strong>no utiliza cookies analíticas</strong> ni de seguimiento de terceros. Si en el futuro las implementamos, actualizaremos esta política y solicitaremos tu consentimiento.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Gestión de cookies</h2>
            <p>Puedes gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que desactivar las cookies necesarias puede afectar al funcionamiento del sitio.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
              <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies</li>
              <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies</li>
              <li><strong>Edge:</strong> Configuración &gt; Cookies y permisos del sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Contacto</h2>
            <p>Para cualquier consulta sobre las cookies, escríbenos a <a href="mailto:hola@adiutask.com" className="text-primary-600 hover:underline">hola@adiutask.com</a>.</p>
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
