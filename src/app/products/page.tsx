import Hero from '@/components/Hero';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main>
      <Hero
        title="Products"
        subtitle="Premium bathroom products for every need"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/products/washbasins" className="group">
              <div className="bg-gray-50 rounded-lg p-8 h-full transition-transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Washbasins</h3>
                <p className="text-gray-600">
                  Discover our range of elegant washbasins in various styles and materials.
                </p>
              </div>
            </Link>
            <Link href="/products/toilets" className="group">
              <div className="bg-gray-50 rounded-lg p-8 h-full transition-transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Toilets</h3>
                <p className="text-gray-600">
                  Explore our collection of modern and efficient toilet solutions.
                </p>
              </div>
            </Link>
            <Link href="/products/shower-toilets" className="group">
              <div className="bg-gray-50 rounded-lg p-8 h-full transition-transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shower Toilets</h3>
                <p className="text-gray-600">
                  Experience the ultimate in comfort and hygiene with our shower toilets.
                </p>
              </div>
            </Link>
            <Link href="/products/faucets" className="group">
              <div className="bg-gray-50 rounded-lg p-8 h-full transition-transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Faucets</h3>
                <p className="text-gray-600">
                  Browse our selection of stylish and functional faucets.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

