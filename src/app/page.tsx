import { Header } from '@/components/Header'
import { FeatureCard } from '@/components/FeatureCard'
import { CodeBlock } from '@/components/CodeBlock'

const features = [
  {
    title: 'Next.js 14',
    description: 'Das neueste React-Framework mit App Router und Server Components',
    icon: '⚡'
  },
  {
    title: 'TypeScript',
    description: 'Vollständige Typsicherheit für bessere Entwicklererfahrung',
    icon: '🔧'
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS-Framework für schnelle UI-Entwicklung',
    icon: '🎨'
  },
  {
    title: 'ESLint',
    description: 'Code-Qualität und Konsistenz durch Linting',
    icon: '✅'
  }
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Funktionen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="card max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Schnellstart
          </h2>
          <p className="text-gray-600 mb-6">
            Folgen Sie diesen Schritten, um mit der Entwicklung zu beginnen:
          </p>
          
          <div className="space-y-4">
            <CodeBlock
              title="1. Abhängigkeiten installieren"
              code="npm install"
            />
            <CodeBlock
              title="2. Entwicklungsserver starten"
              code="npm run dev"
            />
            <CodeBlock
              title="3. Projekt erstellen"
              code="npm run build"
            />
          </div>
        </div>
      </section>

      <section className="text-center">
        <div className="card max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Bereit zum Entwickeln?
          </h2>
          <p className="text-gray-600 mb-6">
            Ihr Starter-Kit ist vollständig konfiguriert und einsatzbereit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Dokumentation lesen
            </button>
            <button className="btn-secondary">
              Beispiele anzeigen
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}