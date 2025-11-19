import Hero from '@/components/Hero';

export default function CollectionsPage() {
  return (
    <main>
      <Hero
        title="Collections"
        subtitle="Curated collections of premium bathroom products"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">BESPOKE</h3>
              <p className="text-gray-600">
                Custom-made solutions tailored to your specific needs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">LAUFEN Cleanet</h3>
              <p className="text-gray-600">
                Advanced shower toilet technology for ultimate comfort.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">LAUFEN SMART</h3>
              <p className="text-gray-600">
                Intelligent bathroom solutions for modern living.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

