export function Header() {
  return (
    <header className="text-center mb-12">
      <div className="card max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Next.js Starter Kit
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Ein modernes Starter-Template mit Next.js 14, TypeScript und Tailwind CSS
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
            Next.js 14
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
            TypeScript
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
            Tailwind CSS
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
            ESLint
          </span>
        </div>
      </div>
    </header>
  )
}