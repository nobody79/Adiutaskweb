export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 mb-4 animate-pulse">
          <span className="text-white font-bold text-2xl">A</span>
        </div>
        <div className="flex items-center gap-1 justify-center">
          <div className="w-2 h-2 rounded-full bg-primary-600 animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 rounded-full bg-primary-600 animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 rounded-full bg-primary-600 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
