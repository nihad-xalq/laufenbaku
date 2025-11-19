import Hero from '@/components/Hero';

export default function FaucetsPage() {
  return (
    <main>
      <Hero
        title="Faucets"
        subtitle="Stylish and functional faucet solutions"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Basin Faucets</h3>
              <p className="text-gray-600">
                Elegant faucets designed for washbasins in various styles.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bath Faucets</h3>
              <p className="text-gray-600">
                Premium faucets for bathtubs with luxurious finishes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shower Faucets</h3>
              <p className="text-gray-600">
                Modern shower faucets for the perfect bathing experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

