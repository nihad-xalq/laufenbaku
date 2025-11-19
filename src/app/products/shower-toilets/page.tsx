import Hero from '@/components/Hero';

export default function ShowerToiletsPage() {
  return (
    <main>
      <Hero
        title="Shower Toilets"
        subtitle="Ultimate comfort and hygiene technology"
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cleanet</h3>
              <p className="text-gray-600 mb-4">
                Advanced shower toilet technology offering superior hygiene and comfort features.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cleanet Sit</h3>
              <p className="text-gray-600 mb-4">
                Innovative seating solution combining ergonomic design with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

