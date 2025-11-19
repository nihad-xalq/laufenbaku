import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <main>
      <Hero
        title="Products"
        subtitle="Premium bathroom products for every need"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden h-full transition-transform hover:scale-105 hover:shadow-xl border border-gray-200">
                  <div className="relative w-full h-64 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

