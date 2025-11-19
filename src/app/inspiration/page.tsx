import Hero from '@/components/Hero';
import Link from 'next/link';

export default function InspirationPage() {
  return (
    <main>
      <Hero
        title="Inspiration"
        subtitle="Discover design ideas, architectural projects, and the latest collections"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/inspiration/news" className="group">
              <div className="bg-gray-50 rounded-lg p-8 h-full transition-transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">News</h3>
                <p className="text-gray-600">
                  Stay updated with the latest news and updates from LAUFEN.
                </p>
              </div>
            </Link>
            <Link href="/inspiration/ideas" className="group">
              <div className="bg-gray-50 rounded-lg p-8 h-full transition-transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideas</h3>
                <p className="text-gray-600">
                  Explore creative design ideas and bathroom inspirations.
                </p>
              </div>
            </Link>
            <Link href="/inspiration/architectural-projects" className="group">
              <div className="bg-gray-50 rounded-lg p-8 h-full transition-transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Architectural Projects</h3>
                <p className="text-gray-600">
                  Discover stunning architectural projects featuring LAUFEN products.
                </p>
              </div>
            </Link>
            <Link href="/inspiration/collections" className="group">
              <div className="bg-gray-50 rounded-lg p-8 h-full transition-transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collections</h3>
                <p className="text-gray-600">
                  Browse our curated collections of premium bathroom products.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

