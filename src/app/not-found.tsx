import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 mb-8">
          <span className="text-white font-bold text-3xl">A</span>
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-2">Página no encontrada</p>
        <p className="text-gray-500 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold hover:shadow-lg hover:shadow-primary-600/25 transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
